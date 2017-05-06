<template>
    <nav class="main-navigation">
        <a href="/narratives"><i class="fa fa-file-text"></i>Narratives</a>
        <a href="/characters"><i class="fa fa-users"></i>Characters</a>
        <a href="/timelines"><i class="fa fa-map-o"></i>Timelines</a>
    </nav>
</template>

<script>
    export default {
        name: 'main-navigation'
    }
</script>

<style lang="scss">
    .main-navigation {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        a {
            color: #42b983;

            i {
                margin: 0 10px;
            }
        }

    }
</style>