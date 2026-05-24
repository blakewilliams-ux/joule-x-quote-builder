/**
 * Configuration Images Mapping
 * Maps configuration names to their image paths in the config folder
 * This file manages all configuration image references for the Joule X Quote Builder
 */

const configImageMap = {
  "BBL": "config/BBL.png",
  "HALO": "config/Halo.png",
  "DIVA": "config/diVa.png",
  "CLEAR SILK": "config/ClearSilk.png",
  "CLEAR V": "config/ClearV.png",
  "HALOTRIBRID": "config/HaloTribrid.png",
  "TOUCHUP": "config/Touchup.png",
  "COMPLETE RESURFACING": "config/Complete-Resurfacing.png",
  "HEROIC": "config/Heroic.png"
};

/**
 * Get the image path for a specific configuration
 * @param {string} configName - The name of the configuration
 * @returns {string|null} - The path to the image or null if not found
 */
function getConfigImagePath(configName) {
  return configImageMap[configName] || null;
}

/**
 * Load all configuration images on page initialization
 * Scans the DOM for elements with data-config attribute and sets their src
 */
function loadConfigImages() {
  document.querySelectorAll('[data-config]').forEach(img => {
    const configName = img.dataset.config;
    const src = getConfigImagePath(configName);
    if (src) {
      img.src = src;
      img.addEventListener('error', function() {
        handleImageError(this);
      });
    }
  });
}

/**
 * Update configuration images after dynamic content changes
 * Call this when configurations are added/removed dynamically
 */
function refreshConfigImages() {
  loadConfigImages();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadConfigImages);
