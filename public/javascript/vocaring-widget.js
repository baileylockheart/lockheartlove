// onionring.js is made up of five files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js, onionring.css, and onionring-images.js
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
// this file contains the code which builds the widget shown on each page in the ring.

var tag = document.getElementById(ringID); // find the widget on the page

thisSite = "https://lockheart.love"; // get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { // we use startsWith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; // when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomSite() {
  otherSites = sites.slice(); // create a copy of the sites list
  otherSites.splice(thisIndex, 1); // remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

// Get the appropriate character image for the current site
function getCharacterImage() {
  // If this site has a custom image, use it
  if (thisIndex !== null && siteImages[sites[thisIndex]]) {
    return siteImages[sites[thisIndex]];
  }
  // Otherwise use the default
  return defaultCharacterImage;
}

// if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
  <div class="vocaring-container">
    <table>
      <tr>
        <td>This site isn't part of the ${ringName} yet. Either tiramisu's a forgetful idiot, or you haven't refreshed your webpage!</td>
      </tr>
    </table>
  </div>
  `);
}
else {
  // find the 'next' and 'previous' sites in the ring
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  // Build links section
  var linksHtml = '';
  
  // Add index link if enabled
  if (useIndex) {
    linksHtml += `<a href='${indexPage}'>index</a>`;
    if (useSource || useRandom) linksHtml += ' │ ';
  }
  
  // Add source link if enabled
  if (useSource) {
    linksHtml += `<a href='${sourcePage}'>source</a>`;
    if (useRandom) linksHtml += ' │ ';
  }
  
  // Add random link if enabled
  if (useRandom) {
    linksHtml += `<a href='javascript:void(0)' onclick='randomSite()'>random</a>`;
  }

  // Get character image
  var characterImg = getCharacterImage();

  // This is the code that displays the widget with the design matching the provided image
  tag.insertAdjacentHTML('afterbegin', `
  <div class="vocaring-container">
    <div class="vocaring-title">${ringName}</div>
    <div class="vocaring-links-top">${linksHtml}</div>
    <div class="vocaring-main">
      <div class="vocaring-prev">
        <a href='${sites[previousIndex]}' aria-label="Previous site">
          <div class="arrow-left"></div>
        </a>
      </div>
      <div class="vocaring-character">
        <img src="${characterImg}" alt="vocal synth blorbo">
      </div>
      <div class="vocaring-next">
        <a href='${sites[nextIndex]}' aria-label="Next site">
          <div class="arrow-right"></div>
        </a>
      </div>
    </div>
  </div>
  `);
}