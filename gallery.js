// Get current page category from URL path
const path = window.location.pathname.toLowerCase();

let category = "random";
if (path.includes("cars")) category = "car";
else if (path.includes("animals")) category = "animal";
else if (path.includes("birds")) category = "bird";
else if (path.includes("mammals")) category = "lion";
else if (path.includes("nature")) category = "nature";
else if (path.includes("cities")) category = "city";

const gallery = document.getElementById("dynamic-gallery");

// Load 6 random images using Unsplash source API (no key needed)
for (let i = 1; i <= 6; i++) {
  const img = document.createElement("img");
  img.src = `https://source.unsplash.com/600x400/?${category}&sig=${i}`;
  img.alt = `${category} image ${i}`;
  gallery.appendChild(img);
}
