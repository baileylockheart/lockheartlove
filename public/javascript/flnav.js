document.getElementById("nav").innerHTML = `
<div>
    <ul>
        <li><a href="/fanlistings/index.html">Home</a></li>
        <li><a href="/fanlistings/joined.html">Joined</a></li>
        <li><a href="/fanlistings/owned.html">Owned</a></li>
        <li><a href="/fanlistings/links.html">Links</a></li>
    </ul>
</div>
<style>
#nav {
    background-color: var(--light);
    width: 100%;
    padding: 0 15px;
    margin: 10px -15px;
    color:var(--main);
    font-family: var(--serif);
    font-size: 1.25rem;   
}
#nav ul {
    display:flex;
    list-style-type:none;
    justify-content: space-evenly;
  }
#nav a{
    text-decoration:none
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

