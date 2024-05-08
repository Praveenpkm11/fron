document.addEventListener('DOMContentLoaded', function () {
  const uploadInput = document.getElementById('upload');
  const generateBtn = document.getElementById('generateBtn');
  const imagePreview = document.getElementById('imagePreview');
  const captionDisplay = document.getElementById('captionDisplay');

  uploadInput.addEventListener('change', function () {
    const file = uploadInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const imageDataUrl = reader.result;
        displayImage(imageDataUrl);
        displayImageName(file.name); // Display selected image name
      };
    } else {
      alert('Please select an image.');
    }
  });

  function displayImage(imageDataUrl) {
    imagePreview.innerHTML = `<img src="${imageDataUrl}" alt="Uploaded Image" style="max-width: 100%; max-height: 300px;">`;
  }

  function displayImageName(imageName) {
    const imageNameElement = document.createElement('p');
    imageNameElement.textContent = `Selected Image: ${imageName}`;
    imagePreview.appendChild(imageNameElement); // Append image name to image preview section
  }

  generateBtn.addEventListener('click', function () {
    const file = uploadInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const imageDataUrl = reader.result;
        generateCaption(imageDataUrl);
      };
    } else {
      alert('Please select an image.');
    }
  });

  function generateCaption(imageDataUrl) {
    // Replace this with your actual caption generation logic
    const caption = "A man is on the bike";
    displayCaption(caption);
  }

  function displayCaption(caption) {
    captionDisplay.innerHTML = `<p><strong>Generated Caption:</strong> ${caption}</p>`;
    uploadInput.style.display = 'none';
    generateBtn.style.display = 'none';
    const startOverBtn = document.createElement('button');
    startOverBtn.textContent = 'Choose Another Image';
    startOverBtn.addEventListener('click', function() {
      location.reload();
    });
    captionDisplay.appendChild(startOverBtn);
    const listenBtn = document.createElement('button');
    listenBtn.id = 'listenBtn';
    const iconSize = '24px'; // Adjust the size as needed
    listenBtn.innerHTML = `<img src="read.png" alt="Listen" style="width: ${iconSize}; height: ${iconSize}; cursor: pointer;">`;
    listenBtn.addEventListener('click', function() {
      // Add functionality to listen to audio here
      alert('Listening to audio...');
    });
    captionDisplay.appendChild(listenBtn);
  }
});
