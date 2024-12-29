document.getElementById("nav").innerHTML = `
<div>
    <ul>
        <li><a href="/about.html">About</a></li>
        <li><a href="/collections.html">Collections</a></li>
        <li><a href="/foryou.html">For You</a></li>
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
@media (max-width: 768px){
    #nav ul{
        margin-left: -2.75rem;
    }
}
</style>
`;
