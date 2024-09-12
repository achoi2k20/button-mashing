// Select all toggle headers
const toggleHeaders = document.querySelectorAll('.toggle-header');


toggleHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const subContainer = header.nextElementSibling; // Get the corresponding sub-container
        // console.log("you've clicked me");
        // if (subContainer.style.display ==='none') {
        //     subContainer.style.display = '';
        // } else {
        //     subContainer.style.display = 'none';
        // }
         subContainer.style.display = subContainer.style.display === 'none' || subContainer.style.display === '' 
             ? 'block' // Show the sub-container
             : 'none'; // Hide the sub-container
    });
});