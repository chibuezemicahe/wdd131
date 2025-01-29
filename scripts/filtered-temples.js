// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Here I Get the last modified date of the page
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Here I Select the hamburger and the nav menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
// Here I Add click event to toggle the menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    if (hamburger.innerHTML === '☰') {
        hamburger.innerHTML = 'x'; // Change to X
    } else {
        hamburger.innerHTML = '☰'; // Change back to hamburger
    }
});



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana Temple",
        location: "Accra Ghana",
        dedicated: " 2004 January 11 ",
        area: 17500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },

      {
        templeName: "Adelaide Australia Temple",
        location: "Adelaide Australia",
        dedicated: " 2000 June 15",
        area: 10700,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Austin Texas Temple",
        location: "Austin Texas",
        dedicated: "2024 August 17",
        area: 30000,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      }
  ];

  const imageGrid = document.querySelector('.image-grid');

  
  function displayTemples(filteredTemples) {
    imageGrid.innerHTML = ""; 
    filteredTemples.forEach(temple => {
        // Here I Create a figure element
        const figure = document.createElement("figure");
        figure.classList.add("temple-card");

        // Here I create a temple name with a title
        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        // Here I create temple location
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        // Here I create temple dedication date
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        // Here I create temple area
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq. ft.`;

        // Here I create temple image
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `Image of ${temple.templeName}`;
        img.loading = "lazy"; // Enables lazy loading

        // Here I create figcaption to group information
        const figcaption = document.createElement("figcaption");
        figcaption.appendChild(templeName);
        figcaption.appendChild(location);
        figcaption.appendChild(dedicated);
        figcaption.appendChild(area);

        // Append image and figcaption to figure
        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Append figure to the image grid
        imageGrid.appendChild(figure);
    });
}

// Display all temples by default
displayTemples(temples);

const navLinks = document.querySelectorAll('.nav__list li a');
const menuSelection = document.getElementById("menu-selection");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const filter = link.textContent.toLowerCase();
        filterTemples(filter);
    });
});

function filterTemples(filter) {
    let filteredTemples = [];

    switch (filter) {
        case "old":
            filteredTemples = temples.filter(temple => {
                console.log(temple);
                const year = parseInt(temple.dedicated.split(",")[0]); 
                return year < 1900;
            });
            break;
        case "new":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]); 
                return year > 2000;
            });
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case "home":
        default:
            filteredTemples = temples;
            break;
    }

    menuSelection.textContent = `Showing: ${filter.charAt(0).toUpperCase() + filter.slice(1)}`;
    displayTemples(filteredTemples);
}
