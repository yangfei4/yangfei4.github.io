// Get all image elements and modal elements
const imagesToClick = document.querySelectorAll('.icon-to-click');
const modals = document.querySelectorAll('.modal');

// Add event listeners to open each modal when the corresponding image is clicked
imagesToClick.forEach((image, index) => {
  image.addEventListener('click', () => {
    modals[index].style.display = 'block';
  });
});

// Add event listeners to close each modal when the close button is clicked
modals.forEach((modal, index) => {
  const closeModalBtn = modal.querySelector(`#closeModal${index + 1}`);
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Event listener to close the modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Event listener to close the modal when pressing the Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});