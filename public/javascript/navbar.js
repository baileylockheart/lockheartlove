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
            <li><a class="dropbtn" onclick="forMe()">For Me</a></li>
            <div id="dropdownForMe" class="dropdown-content">
                <li><a href="/about">About Me</a></li>
                <a href="/collections/albums">Albums</a>
                <a href="/collections/drawings">Drawings</a>
                <a href="/collections/lists">Lists</a>
                <a href="/collections/mymusic">My Music</a>
                <a href="/collections/quizzes">Quiz Results</a>
                <a href="/collections/videomanager">Video Manager</a>
                <a href="/collections/websites">Websites</a>
            </div>
        </div> 
        <div class="dropdown">
            <li><a class="dropbtn" onclick="forYou()">For You</a></li>
            <div id="dropdownForYou" class="dropdown-content">
                <a href="/foryou">See All</a>
                <a href="/collections/cliques">Cliques</a>
                <a href="/graphics/">Graphics</a>
                <a href="/recs/">Recs</a>
                <a href="/source/" target="_blank">Source Code  <svg><use xlink:href="#icon-link"></use></svg></a>
                <a href="/collections/themes">Themes</a>
                <a href="/webmastery/" target="_blank">Webmastery <svg><use xlink:href="#icon-link"></use></svg></a>
                <a href="/webring" target="_blank">Webring <svg><use xlink:href="#icon-link"></use></svg></a>
            </div>
        </div> 
        <div class="dropdown">
            <li><a class="dropbtn" onclick="forSite()">For the Site</a></li>
            <div id="dropdownSite" class="dropdown-content">
                <a href="/collections/">All Collections</a>
                <a href="/collections/awards">Awards</a>
                <a href="/domain">Domain</a>
                <a href="/fanlistings/" target="_blank">Fanlistings <svg><use xlink:href="#icon-link"></use></svg></a>
                <a href="/collections/feeds">Feeds</a>
                <a href="/collections/greenhouse">Greenhouse</a>
                <a href="/shrines/">Shrines</a>
                <a href="/collections/virtualpets">Virtual Pets</a>
            </div>
        </div> 
        <li><a href="/blog/">Blog</a> <!--<img src="/images/new.gif">--></li>
        <li><a href="/links">Links</a></li>
    </ul>
</div>
<svg display='none'><symbol id='icon-link' viewBox='0 0 40 40'><path d='M30.1,22.8c-0.1-0.1-0.3-0.2-0.5-0.2h-1.3c-0.2,0-0.3,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5v6.4c0,0.9-0.3,1.6-0.9,2.3 c-0.6,0.6-1.4,0.9-2.3,0.9H7.8c-0.9,0-1.6-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V12.9c0-0.9,0.3-1.6,0.9-2.3C6.1,10,6.9,9.7,7.8,9.7 h14.1c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,0.2-0.3,0.2-0.5V7.8c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2H7.8c-1.6,0-3,0.6-4.1,1.7 S2,11.3,2,12.9v16.7c0,1.6,0.6,3,1.7,4.1c1.1,1.1,2.5,1.7,4.1,1.7h16.7c1.6,0,3-0.6,4.1-1.7c1.1-1.1,1.7-2.5,1.7-4.1v-6.4 C30.3,23,30.2,22.9,30.1,22.8z M37.6,5c-0.3-0.3-0.6-0.4-0.9-0.4H26.4c-0.3,0-0.6,0.1-0.9,0.4s-0.4,0.6-0.4,0.9s0.1,0.6,0.4,0.9 l3.5,3.5L16,23.4c-0.1,0.1-0.2,0.3-0.2,0.5s0.1,0.3,0.2,0.5l2.3,2.3c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l13.1-13.1 l3.5,3.5c0.3,0.3,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4s0.4-0.6,0.4-0.9V5.9C38,5.5,37.9,5.2,37.6,5z'/></symbol></svg>
<style>
#nav svg{
    fill:var(--main);
    margin-bottom:-69px;
    margin-right:-75px
}
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
    left:-15px;
    box-shadow:0 10px 27px rgba(0, 0, 0, 0.38);
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

