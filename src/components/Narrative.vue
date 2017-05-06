<template>
    <div class="narrative"></div>
</template>

<script>
    export default {
        name: 'narrative',
        props: {
            'name': '',
            'description': '',
            'description-brief': '',
            'categories': []
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .narrative {
    }
</style>
