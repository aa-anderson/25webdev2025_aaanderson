document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("destination-button");
    button.addEventListener("click", getDestination);
  });
  
  function getDestination() {
    const result = document.getElementById("destination-result");
  
    const destinations = [
      {
        name: "London",
        link: "London.html"
      },
      {
        name: "Jamaica",
        link: "Jamaica.html"
      },
      {
        name: "Nantucket",
        link: "Nantucket.html"
      }
    ];
  
    const selected = destinations[Math.floor(Math.random() * destinations.length)];
  
    result.innerHTML = `
      <p>Start your next adventure in <strong>${selected.name}</strong>!</p>
      <a href="${selected.link}">Learn More</a>
    `;
    result.scrollIntoView({ behavior: "smooth" });
  }
  