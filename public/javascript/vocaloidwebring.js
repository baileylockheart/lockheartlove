document.getElementById("vocaring").innerHTML = `
<style>
@font-face{
    font-family:'Legacy';
    src:url(https://files.catbox.moe/vb0fng.otf);
}

#vocaring{
    height:fit-content;
    margin:0 5px;
}

.vocacontainer::selection {
    background:#4cd4de;
    color:white;
}

.vocacontainer::-moz-selection {
    background:#4cd4de;
    color:white;
}

.vocacontainer{
    width:100%;
    height:80px;
    padding:5px;
    background-color:#c9eff2;
    border:4px solid #4cd4de;
    box-sizing:border-box;
    margin-bottom:5px;
}

.vocacontainer table {
    margin:0;
}

.vocacontainer .webring-info {
    text-align:center;
    font-family:'Legacy';
    color:#e74492;
    font-size:27px;
    letter-spacing:3px;
    text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
    line-height:100%;
    margin-bottom:5px;
}

.vocacontainer .webring-links{
    font-size:17px;
    font-family:'Arial';
    color:#e74492;
}

.vocacontainer .webring-links a{
    text-decoration: none;
    color:#e74492;
    text-shadow:#ffffff 2px 0px 0px, #ffffff 1.75517px 0.958851px 0px, #ffffff 1.0806px 1.68294px 0px, #ffffff 0.141474px 1.99499px 0px, #ffffff -0.832294px 1.81859px 0px, #ffffff -1.60229px 1.19694px 0px, #ffffff -1.97999px 0.28224px 0px, #ffffff -1.87291px -0.701566px 0px, #ffffff -1.30729px -1.51361px 0px, #ffffff -0.421592px -1.95506px 0px, #ffffff 0.567324px -1.91785px 0px, #ffffff 1.41734px -1.41108px 0px, #ffffff 1.92034px -0.558831px 0px;
    filter:drop-shadow( 0 2px var(--bc)) drop-shadow( 2px 0 var(--bc)) drop-shadow( 0 -2px var(--bc)) drop-shadow(-2px 0 var(--bc));
    transition:0.3s;
}

.vocacontainer .webring-links a:hover{
    letter-spacing:normal;
}

.vocacontainer img {
    display:inline !important;
}
</style>

<table class='vocacontainer' style='text-align: center;'>
    <tr>
        <td>
            <div class='webring-info'>VOCALOID<br>WEBRING</div>
            <div class='webring-links'>
                <a href='https://webring.adilene.net/index.php' target='_parent'>Index</a> &#8226; <a href='https://webring.adilene.net/members.php' target='_parent'>Members</a>
            </div>
        </td>
    </tr>
</table>
`;
