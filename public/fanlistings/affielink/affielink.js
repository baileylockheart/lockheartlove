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
    <style>
    @font-face {
      font-family: "Perfect DOS";
      src: url("https://file.garden/ZrZSgsrYfQXsO7QH/fonts/PerfectDOS.ttf");
    }
    #affiebtn{
      background-color: #3E74D0;
      color: #e6f0ff;
      width: 75px; /* you can change this to make it fit the images you're using! */
      height:15px;
      font-family: "Perfect DOS", serif;
      font-size: 14px !important;
      font-weight: 500;
      letter-spacing: -1px;
      border:0;
      border-radius: 0 !important
    }
    #affielabel{
      height:15px;
      margin:8px
    }
    </style>
    <div id="affielabel">
      <a href="https://pastelprince.lockheart.love/affielink" title="AffieLink"><button id="affiebtn">AffieLink</button></a>
    </div>
`);

document.write(getImageHtmlCode());