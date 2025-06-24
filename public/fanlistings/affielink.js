var tag = document.getElementById("affielink");

var imageUrls = [
    "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/amour.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/precious.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/shadowdream.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/shadowlord.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/unchartedsky.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/ww/ww-affie.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/yaten.png"
  , "https://file.garden/ZrZSgsrYfQXsO7QH/affielink/strongisfighting.png"
];
var imageLinks = [
    "https://love.suga.nu/"
   , "https://seaincense.com/"
   , "https://10-31.net/megan/"
   , "https://shadow-lord.com/"
   , "https://uncharted-sky.org/"
   , "https://webmasterwebring.netlify.app/"
   , "https://yaten.net/"
  , "https://love.strongisfighting.org/"
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
      width: 75px !important; 
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
      margin:8px;
    }
    </style>
    <div id="affielabel">
      <a href="https://pastelprince.lockheart.love/affielink" title="AffieLink"><button id="affiebtn">AffieLink</button></a>
    </div>
`);

document.write(getImageHtmlCode());