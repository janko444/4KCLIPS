const videoInput = document.getElementById('videoInput');
const preview = document.getElementById('preview');
const enhanceBtn = document.getElementById('enhanceBtn');
const statusText = document.getElementById('status');

let selectedFile = null;

videoInput.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];

  if (selectedFile) {
    preview.src = URL.createObjectURL(selectedFile);
  }
});

enhanceBtn.addEventListener('click', async () => {

  if (!selectedFile) {
    alert('Wrzuć film');
    return;
  }

  statusText.innerText = 'AI poprawia jakość...';

  const API_KEY = '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';

  const formData = new FormData();
  formData.append('file', selectedFile);

  try {

    // DEMO AI REQUEST
    const response = await fetch(
      'https://api-inference.huggingface.co/models',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
        body: formData
      }
    );

    statusText.innerText =
      'Film wysłany do AI!';

  } catch (err) {

    console.error(err);

    statusText.innerText =
      'Błąd AI';

  }

});
