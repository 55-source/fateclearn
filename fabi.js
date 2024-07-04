const clickableImage = document.getElementById('clickable-image');
const pdfContainer = document.getElementById('pdf-container');

clickableImage.addEventListener('click', () => {
    // Load the PDF file (replace 'pdf.pdf' with your actual PDF file path)
    const pdfURL = 'fabi.pdf'; // Replace with your PDF URL

    // Render the PDF content using a library like PDF.js (not included here)
    renderPDF(pdfURL);
});

// Function to render PDF using a library like PDF.js (not included here)
function renderPDF(pdfURL) {
    // Use PDF.js or similar library to display the PDF content within the pdfContainer element
}
