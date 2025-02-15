var tag = document.getElementById(ringID);

thisSite = window.location.href;
thisIndex = null;

for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) {
    thisIndex = i;
    break; 
  }
}

function randomSite() {
  otherSites = sites.slice();
  otherSites.splice(thisIndex, 1);
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

  indexText = ""
  if (useIndex) {
    indexText = `<a href='${indexPage}'>about</a> &hearts; `;
  }

  randomText = ""
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> &hearts; `;
  }

  tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td class='webring-prev'><a href='https://linkyblog.neocities.org/'>&larr; </a></td>
      <td class='webring-info'>the ${ringName} webring</br>
      <span class='webring-links'>
        ${indexText}
        ${randomText}
        <a href='https://garlic.garden/onionring/'>code</a></span></td>
      <td class='webring-next'><a href='https://lost-boy.org'> &rarr;</a></td>
    </tr>
  </table>
  `);


