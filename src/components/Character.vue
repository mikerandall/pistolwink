<template>
    <div class="character"></div>
</template>

<script>
    export default {
        name: 'character',
        props: {
            'name': '',
            'image': '',
            'bio': '',
            'bio-short': '',
            'categories': ''
        },
        data () {
            return {}
        },
        card () {
            return '<card card-name="'+ this.name + '" card-header="Character"></card>';
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .character {

    }
</style>
