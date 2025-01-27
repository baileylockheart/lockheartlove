document.getElementById("nav").innerHTML = `
<div>
    <ul>
        <li><a href="/graphics/backgrounds">BGs</a></li>
        <li><a href="/graphics/icons">Icons</a></li>
        <li><a href="/graphics/stamps">Stamps</a></li>
        <li><a href="/graphics/buttons">Buttons</a></li>
        <li><a href="/graphics/shiny">Shiny</a></li>
        <li><a href="/graphics/blinkies">Blinkies</a></li>
        <li><a href="/graphics/other">Other</a></li>
        <li><a href="/graphics/links">Links</a></li>
    </ul>
</div>
<style>
#nav {
    background-color: var(--accent);
    width: 100%;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-bottom: 10px;
    color:var(--posts);
    font-size: 1.25rem;
    
}
#nav ul {
    display:flex;
    list-style-type:none;
    justify-content: space-evenly;
  }
#nav a:hover{
    color: var(--night-mode-accent);
    transition: 0.6s ease;
    -webkit-transition: 0.6s ease
}
</style>
`;

