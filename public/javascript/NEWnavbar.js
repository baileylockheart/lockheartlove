function forMe() {
    document.getElementById("dropdownForMe").classList.toggle("show");
}
function forYou() {
    document.getElementById("dropdownForYou").classList.toggle("show");
}
function forSite() {
    document.getElementById("dropdownSite").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
document.getElementById("nav").innerHTML = `
<div>
    <ul>
        
        <div class="dropdown">
            <li><a class="dropbtn" onclick="forMe()">Me</a></li>
            <div id="dropdownForMe" class="dropdown-content">
                <li><a href="/about.html">About Me</a></li>
                <a href="/collections/albums.html">Albums</a>
                <a href="/collections/music.html">Music</a>
                <a href="/collections/drawings.html">Drawings</a>
                <a href="/collections/websites.html">Websites</a>
                <a href="/collections/quizzes.html">Quiz Results</a>
            </div>
        </div> 
        <div class="dropdown">
            <li><a class="dropbtn" onclick="forYou()">You</a></li>
            <div id="dropdownForYou" class="dropdown-content">
                <a href="/foryou.html">See All</a>
                <a href="/source.html">Source Code</a>
                <a href="/webmastery.html">Webmastery Tools</a>
                <a href="/collections/cliques.html">Cliques</a>
                <a href="/collections/themes.html">Themes</a>
                <a href="/graphics.html">Graphics</a>
            </div>
        </div> 
        <div class="dropdown">
            <li><a class="dropbtn" onclick="forSite()">Site</a></li>
            <div id="dropdownSite" class="dropdown-content">
                <a href="/collections.html">See All</a>
                <a href="/source.html">Source Code</a>
                <a href="/collections/feeds.html">Feeds</a>
                <a href="/collections/greenhouse.html">Greenhouse</a>
                <a href="/collections/shrines.html">Shrines</a>
                <a href="/collections/virtualpets.html">Virtual Pets</a>
            </div>
        </div> 
        <li><a href="/blog.html">Blog</a></li>
        <li><a href="/links.html">Links</a></li>
    </ul>
</div>
<style>
#nav {
    background-color: var(--light);
    width: 100%;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-bottom: 10px;
    color:var(--main);
    font-family: var(--serif);
    font-size: 1.25rem;
}
#nav ul {
    display:flex;
    list-style-type:none;
    justify-content: space-evenly;
  }
#nav a:hover{
    color: var(--bg);
    transition: 0.6s ease;
    -webkit-transition: 0.6s ease
}
.dropdown {
    position: relative;
    display: block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--lighter);
    min-width: 220px;
    left:-15px
}
.dropdown-content a {
    color:var(--main);
    padding: 5px 16px;
    text-decoration: none;
    display: block;
    border-top:solid 1px var(--text)
}
.show {
    display:block;
}
@media (max-width: 768px){
    #nav ul{
        margin-left: -2.75rem;
    }
    .dropdown-content {
        min-width: 180px;
    }
}
</style>
`;
