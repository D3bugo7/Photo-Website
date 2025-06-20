// Universal dynamic gallery loader

// Get the current page's URL path
const path = window.location.pathname.toLowerCase();

// Define keyword based on path
let category = "random";

if (path.includes("cars/f1"))        category = "f1 car";
else if (path.includes("cars/super")) category = "supercar";
else if (path.includes("cars/sports")) category = "sports car";
else if (path.includes("cars"))       category = "car";

else if (path.includes("animals/birds"))   category = "bird";
else if (path.includes("animals/mammals")) category = "mammal";
else if (path.includes("animals"))         category = "animal";

else if (path.includes("nature")) category = "nature";
else if (path.includes("cities")) category = "city";
else if (path.includes("index.html")) category = "photography";

// Find the gallery container
const gallery = document.getElementById("dynamic-gallery");

// If it exists, dynamically generate image elements
if (gallery) {
  for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img");
    img.src = `https://source.unsplash.com/600x400/?${category}&sig=${i}`;
    img.alt = `${category} image ${i}`;
    gallery.appendChild(img);
  }
}
