<template>
    <div class="container">

        <div class="row align-items-center">

            <div class="col">

                <h1>Pistolwink.</h1>


                <main-navigation></main-navigation>

            </div>

        </div>

        <div class="row align-items-center">

            <div class="col">

                <router-view></router-view>

            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: 'Pistolwink',
    }
</script>

<style lang="scss">
    html {
        font-family: 'Merriweather Sans', sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1 {
        font-family: 'Merriweather Sans', sans-serif;
        margin: 1em 0;
    }
</style>
