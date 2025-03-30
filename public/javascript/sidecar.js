// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = "https://lockheartlove.neocities.org/"; //get the url of the site we're currently on
thisIndex = null;

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sidecarsites.length; i++) {
  if (thisSite.startsWith(sidecarsites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function randomsidecarSite() {
  othersidecarSites = sidecarsites.slice(); //create a copy of the sites list
  othersidecarSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomsidecarIndex = Math.floor(Math.random() * othersidecarSites.length);
  top.location.href = othersidecarSites[randomsidecarIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
    <p>This site isn't part of the ${ringName} webring yet.<br>Please <a style="color:#386f7f;" href="https://joejenett.com/contact/">contact joe</a> to have your site added to the list.</p>
	`);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sidecarsites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sidecarsites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}'><img src="https://sidecar.neocities.org//images/home.png" width="20" alt="webring home" style="position:relative;top:4px;"></a> | `;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomsidecarSite()'>random</a> | `;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
  	<a href='${sidecarsites[previousIndex]}' target='_top'>&larr; </a>
    <a href="https://sidecar.neocities.org/" target='_top'>${ringName}</a>
	<a href='${sidecarsites[nextIndex]}' target='_top'> &rarr;</a><br>
     <span class='webring-links'><a href='javascript:void(0)' onclick='randomsidecarSite()'>random</a> | powered by <a href='https://garlic.garden/onionring/' target='_top'>onionring</a></span>
  `);

}
      
     
		
