var tag = document.getElementById("affielink");

var imageUrls = [ // remember to put a comma before new entries!
    "imagepath/example.png"
  , "imagepath/otherexample.png"
];
var imageLinks = [
    "https://example.com"
   , "https://otherexample.com/"
];

function getImageHtmlCode() {
 var dataIndex = Math.floor(Math.random() * imageUrls.length);
 var img = '<a href=\"' + imageLinks[dataIndex] + '" target=\"_blank\"><img src="';        
 img += imageUrls[dataIndex];
 img += '\" alt=\"AffieLink\"/></a>';
 return img;
}

tag.insertAdjacentHTML('afterbegin', `
    <div style="height:15px;margin:3px"><a href="https://pastelprince.netlify.app/affielink" title="AffieLink"><img src="https://file.garden/ZrZSgsrYfQXsO7QH/affielink/affielink.png" style="border:0;margin:0;height:15px" alt="AffieLink" /></a></div>
`);

document.write(getImageHtmlCode());