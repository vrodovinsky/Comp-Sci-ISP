<template> 
        <aside>
            <figure>
                <div id="avatar"></div>
                <figcaption>Johnny Doe</figcaption>
            </figure>
            <img src="images/menu.svg">
            <nav>
                <ul>
                    <li class="activeList"><a href="dashboard.html">DASHBOARD</a></li>
                    <li><a href="earnings&analytics.html">EARNINGS AND ANALYTICS</a></li>
                    <li><a href="#">TASKS & HISTORY</a></li>
                    <li><a href="profile&settings.html">PROFILE AND SETTINGS</a></li>
                </ul>
            </nav>
        </aside>
</template>

<script>


    (function() {
        var menu = document.querySelector('ul'),
            menulink = document.querySelector('img');
        
        /* menulink.addEventListener('click', function(e) {
            menu.classList.toggle('active');
            e.preventDefault();
        }); */
        
    })();


</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body, html {
    height: calc(100% - 2em);
    margin: 0;
    font-family: 'Montserrat';
}

body {
    background: #823696; /* Old browsers */
    background: -moz-linear-gradient(45deg, #32279E 0%, #B756A3 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32279E', endColorstr='#B756A3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    background-repeat: no-repeat;
    background-attachment: fixed;
}

aside {
    color: #fff;
    display: grid;
    grid-template-columns: auto 40px;
    padding: 2em;
}
     
img {
    width: 40px;
    cursor: pointer;
}

figure {
    margin: 0;
}

figcaption {
    font-size: 1.3em;
    font-weight: bold;
}

nav {
    background: #b24343;
}

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

nav li {
    position: relative;

}

nav a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
    background-color: #f1f1f1;
    border-radius: 4px;
    transition: all 0.3s ease;
}

nav a:hover {
    background-color: #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateX(10px);
}


.active {
    position: absolute;
    display: block;
    background: #fff;
    width: 50%;
    left: 0;
    top: 0;
    height: 100%;
}

ul {
    display: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul li a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: .8em;
    display: block;
    padding: 1.5em 3em;
    background-color: rgba(255,255,255,.35);
    color: #000;
}

.activeList{
    background-color: white;
}

main {
    background: #fff;
    padding: 1em 1.4em;
}

h1 {
    margin: 0;
}

p {
    font-size: 1.1em;
    line-height: 1.5em;
}

.cta {
    display: block;
    color: #fff;
    background: #32279E;
    text-decoration: none;
    padding: 8px 50px;
    font-size: 1.2em;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    margin: 2em 0;
}


@media only screen and (min-width: 768px) {

    body {
        display: grid;
        grid-template-columns: 20% auto;
        padding: 2em;
    }

    img {
        display: none;
    }

    aside {
        background: #DCE1F6;
        grid-template-columns: auto;
        grid-template-rows: 20% auto;
        padding: 0;
    }

    main {
        padding: 4em;
        background: white url('TaskTapp-Vue/src/assets/images/bg.svg') no-repeat bottom right;
        background-size: 70%;
    }

    #avatar {
        border-radius: 50%;
        background: #fff;
        width: 50px;
        height: 50px;
        margin: 2em auto 1em auto;
    }

    figcaption {
        text-align: center;
        color: #000;
    }

    ul {
        display: block;
        margin-top: 2em;
        position: relative !important;
        background: none !important;
        width: 100% !important;
    }

    ul li a:hover {
        background-color: #fff;
    }

    nav {
        background: none;
    }

    .cta {
        display: inline-block;
        font-size: 1.3em;
        padding: .8em 3em;
    }

    h1 {
        font-size: 3em;
        margin-top: 2em;
    }

    p {
        font-size: 1.5em;
    }

}
</style>