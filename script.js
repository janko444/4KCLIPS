const videoInput = document.getElementById('videoInput');
const preview = document.getElementById('preview');
const enhanceBtn = document.getElementById('enhanceBtn');
const statusText = document.getElementById('status');

let selectedFile = null;

videoInput.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];

  if (selectedFile) {
    const url = URL.createObjectURL(selectedFile);
    preview.src = url;
  }
});

enhanceBtn.addEventListener('click', async () => {
  if (!selectedFile) {
    alert('Najpierw wrzuć film');
    return;
  }

  statusText.innerText = 'AI poprawia jakość filmu...';

  // Symulacja AI processing
  setTimeout(() => {
    statusText.innerText = 'Gotowe! (demo version)';
  }, 3000);
});
