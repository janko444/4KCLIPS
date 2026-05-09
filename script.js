const fileInput = document.getElementById("fileInput");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const blur = document.getElementById("blur");
const zoom = document.getElementById("zoom");

let fileURL = null;

// 📥 upload video
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  fileURL = URL.createObjectURL(file);
  video.src = fileURL;
});

// 🎬 render engine (AE style)
function render() {
  requestAnimationFrame(render);

  if (!video.videoWidth) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.save();

  const scale = zoom.value;

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.scale(scale, scale);

  ctx.filter = `
    brightness(${brightness.value})
    contrast(${contrast.value})
    blur(${blur.value}px)
  `;

  ctx.drawImage(video, -canvas.width / 2, -canvas.height / 2);

  ctx.restore();
}

video.addEventListener("play", render);

// 🎥 EXPORT VIDEO
document.getElementById("export").addEventListener("click", () => {
  const stream = canvas.captureStream(30);

  const recorder = new MediaRecorder(stream, {
    mimeType: "video/webm"
  });

  let chunks = [];

  recorder.ondataavailable = (e) => chunks.push(e.data);

  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ae-lite.webm";
    a.click();
  };

  recorder.start();

  setTimeout(() => recorder.stop(), 6000);
});
