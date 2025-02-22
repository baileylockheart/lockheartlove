var tag = document.getElementById("affielink");

var imageUrls = [
    "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/amour.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/precious.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/shadowlord.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/ww/ww-affie.png"
];
var imageLinks = [
    "https://love.suga.nu/"
   , "https://seaincense.com/"
    , "https://shadow-lord.com/"
   , "https://webmasterwebring.netlify.app/"
];

function getImageHtmlCode() {
 var dataIndex = Math.floor(Math.random() * imageUrls.length);
 var img = '<a href=\"' + imageLinks[dataIndex] + '" target=\"_blank\"><img src="';        
 img += imageUrls[dataIndex];
 img += '\" alt=\"AffieLink\"/></a>';
 return img;
}

tag.insertAdjacentHTML('afterbegin', `
    <div style="height:15px;margin:5px"><a href="links.html" title="AffieLink"><img src="https://file.garden/ZrZSgsrYfQXsO7QH/affielink/affielink.png" style="border:0;margin:0;height:15px" alt="AffieLink" /></a></div>
`);

document.write(getImageHtmlCode());