
document.addEventListener("DOMContentLoaded", function() {
    
    const homeLink = document.getElementById("home-link");
    const searchLink = document.getElementById("search-link");
    const charactersLink = document.getElementById("characters-link");
    const creatorLink = document.getElementById("bio-link");

    
    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    });

    
    searchLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("search").scrollIntoView({ behavior: "smooth" });
    });

    
    charactersLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("characters").scrollIntoView({ behavior: "smooth" });
    });

    
    bioLink.addEventListener("click", function(event) {
        event.preventDefault(); 
        document.getElementById("more").scrollIntoView({ behavior: "smooth" });
    });
});
