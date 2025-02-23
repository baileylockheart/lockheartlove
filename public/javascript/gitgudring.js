// webstring by june @ webcatz.neocities.org

// settings
webring = {

  // list of sites in the ring
  sites: [
    "https://mechagic.party/",
    "https://tofutush.github.io/The-Iron-Ragdoll/misc/links/",
    "https://ironstar.nekoweb.org/",
    "https://bibliohound.neocities.org/webrings/",
    "https://bang1338.nekoweb.org/",
      ],

  // html inserted as your widget
  // PREV and NEXT get replaced with neighboring site urls
  widget: `
  <style>
  #gitgudring{
	display: block;
  margin: 10px auto;
}

br.low{
	width: 0px;
	height: 0px;
	margin: 0px;
}

#gitgudlock{
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

img.nav{
	height: 50%;
}

a.git {
   background-size:100% 200%;
   background-image:linear-gradient(to bottom,rgba(0,0,0,0) 50%, #FF5B3E 50%)!important;
   -webkit-transition:background-position 0.5s;
   -moz-transition:background-position 0.5s;
   transition:background-position 0.5s;
}
a.git:hover {
   background-position:0 100%;
}
  </style>
    <div id="gitgudring">
     <div id="gitgudlock">
       <br class="low">
         <a class="git" href="https://mechagic.party/extras/gitgudring"><img src="/images/webrings/3giticon.webp" alt="go to webring"></a>
       <br class="low">
      </div>
      <div id="gitgudlock">
       <a class="git" href="https://bang1338.nekoweb.org/"><img class="nav" src="/images/webrings/3gitprev.webp" alt="PREV"></a>
       <a class="git" href="RANDOM"><img src="/images/webrings/3gitrand.webp" alt="RANDOM"></a>
       <a class="git" href="https://mechagic.party/"><img class="nav" src="/images/webrings/3gitnext.webp" alt="NEXT"></a>
      </div>
    </div>
  `,
};



// code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));

  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;

delete webring;