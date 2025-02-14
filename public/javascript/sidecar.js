var tag = document.getElementById(ringID);

thisSite = window.location.href; 
thisIndex = null;

for (i = 0; i < sidecarsites.length; i++) {
  if (thisSite.startsWith(sidecarsites[i])) { 
    thisIndex = i;
    break; 
  }
}

function randomsidecarSite() {
  othersidecarSites = sidecarsites.slice();
  othersidecarSites.splice(thisIndex, 1);
  randomsidecarIndex = Math.floor(Math.random() * othersidecarSites.length);
  top.location.href = othersidecarSites[randomsidecarIndex];
}

if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
    <a href='https://oerrorpage.neocities.org/' target='_top'>&larr; </a>
    <a href="https://sidecar.neocities.org/" target='_top'>${ringName}</a>
	<a href='https://bulltown.neocities.org/' target='_top'> &rarr;</a><br>
     <span class='webring-links'><a href='javascript:void(0)' onclick='randomsidecarSite()'>random</a> | powered by <a href='https://garlic.garden/onionring/' target='_top'>onionring</a></span>
  `);
}
else {
  previousIndex = (thisIndex-1 < 0) ? sidecarsites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sidecarsites.length) ? 0 : thisIndex+1;

  indexText = ""
  if (useIndex) {
    indexText = `<a href='${indexPage}'><img src="https://sidecar.neocities.org//images/home.png" width="20" alt="webring home" style="position:relative;top:4px;"></a> | `;
  }

  randomText = ""
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomsidecarSite()'>random</a> | `;
  }

  tag.insertAdjacentHTML('afterbegin', `
  	<a href='https://oerrorpage.neocities.org/' target='_top'>&larr; </a>
    <a href="https://sidecar.neocities.org/" target='_top'>${ringName}</a>
	<a href='https://bulltown.neocities.org/' target='_top'> &rarr;</a><br>
     <a href='javascript:void(0)' onclick='randomsidecarSite()'>random</a> | <span class='webring-links'>powered by <a href='https://garlic.garden/onionring/' target='_top'>onionring</a></span>
  `);

}