const configImageMap = {
  "BBL": "config/BBL.png",
  "Halo": "config/Halo.png",
  "diVa": "config/diVa.png",
  "ClearSilk": "config/ClearSilk.png",
  "ClearV": "config/ClearV.png",
  "HaloTribrid": "config/HaloTribrid.png",
  "Touchup": "config/Touchup.png",
  "Complete Resurfacing": "config/Complete-Resurfacing.png",
  "HEROic": "config/Heroic.png",
  "Heroic": "config/Heroic.png",
  "ClearSuite": "config/ClearSuite.png"
};

function getConfigImagePath(configName) {
  return configImageMap[configName] || null;
}

function handleImageError(img) {
  img.style.display = "none";

  const fallbackText = img.getAttribute("alt") || img.dataset.config || "";
  const fallback = document.createElement("span");
  fallback.className = "config-icon-fallback";
  fallback.textContent = fallbackText;

  if (img.parentNode && !img.parentNode.querySelector(".config-icon-fallback")) {
    img.parentNode.appendChild(fallback);
  }
}

function loadConfigImages(root = document) {
  root.querySelectorAll("img[data-config]").forEach(img => {
    const configName = img.dataset.config;
    const src = getConfigImagePath(configName);

    if (src) {
      img.src = src;
      img.onerror = function () {
        handleImageError(img);
      };
    }
  });
}

function refreshConfigImages() {
  loadConfigImages(document);
}

document.addEventListener("DOMContentLoaded", function () {
  loadConfigImages(document);
});
