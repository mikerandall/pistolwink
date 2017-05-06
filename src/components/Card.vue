<template>
    <div class="card">
        <b-card
            :header="cardHeader"
            :footer="cardFooter"
            :title="cardName"
            :show-header="showCardHeader"
            :show-footer="showCardFooter">
            <slot></slot>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: [
            'card-footer',
            'card-header',
            'card-name',
            'show-card-header',
            'show-card-footer',
            'card-data'
        ],
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {

        .card-header {
            font-size: 10px;
            font-weight: bold;
        }

    }
</style>
