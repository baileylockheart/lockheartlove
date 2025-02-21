var tag = document.getElementById("affielink");

var imageUrls = [
    "img/links/75x50-amour.png"
  , "img/links/precious.png"
  , "img/links/shadowlord.png"
  , "img/links/ww-affie.png"
];
var imageLinks = [
    "https://love.suga.nu/"
   , "https://seaincense.com/"
    , "https://shadow-lord.com/"
   , "https://webmasterwebring.netlify.app/"
];

function getImageHtmlCode() {
 var dataIndex = Math.floor(Math.random() * imageUrls.length);
 var img = '<a href=\"' + imageLinks[dataIndex] + '"><img src="';        
 img += imageUrls[dataIndex];
 img += '\" alt=\"AffieLink\"/></a>';
 return img;
}

tag.insertAdjacentHTML('afterbegin', `
    <div style="height:15px;margin:5px"><a href="links.html" title="AffieLink"><img src="img/affielink.png" style="border:0;margin:0;height:15px" alt="AffieLink" /></a></div>
`);

document.write(getImageHtmlCode());