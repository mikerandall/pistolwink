<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Narratives.</h2>

                <p>Narratives in their most basic form are a story, involving characters and a timeline.</p>
            </div>
        </div>

        <b-card no-block>
            <b-tabs small card ref="tabs" v-model="tabIndex">
                <b-tab title="View All">
                    <narrative-list></narrative-list>
                </b-tab>

                <b-tab title="Create New">
                    <narrative-create></narrative-create>
                </b-tab>

            </b-tabs>
        </b-card>
    </div>


</template>

<script>

    import narrativeList from './list';
    import narrativeCreate from './create';

    export default {
        data() {
            return {
                tabIndex: 0,
                error: false
            }
        },
        methods: {
            detail(item) {
            },

            create(narrative) {
                return this.$http
                    .put('http://localhost:3333/api/v1/Narrative', narrative);
            },

            delete(narrative) {

            }
        },
        components: {
            'narrative-list': narrativeList,
            'narrative-create': narrativeCreate
        }
    }
</script>

<style lang="scss">
</style>