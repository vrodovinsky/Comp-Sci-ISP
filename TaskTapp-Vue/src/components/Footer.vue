<template>
    <footer>
        <ul class="container">
            <li><a href="/">Home</a></li>
            <li><a href="/search">Search our services</a></li>
            <li><a href="/logIn">Log in</a></li>
            <li><a href="/signUp">Sign up</a></li>
        </ul>
        <p>Copyright &copy; 2023</p>
    </footer>
</template>

<style>
    /**Footer */
    footer{
        grid-column: 1/4;
        background: #32279E;
        
        padding: 0px;
        margin: 0;
        text-align: center;
    }

    footer .container{
        /**flexbox */
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    footer a{
        color: #F8F0C6;
        text-decoration: none;
        font-size: 15px;
    }

    footer li{
        display: inline;
        padding: 0 30px 0 30px;
        align-self: center;
    }
</style>
