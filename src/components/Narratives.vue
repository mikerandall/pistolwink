<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Narratives.</h2>

                <p>Narratives in their most basic form are a story, involving characters and a timeline.</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <form submit="">
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                narratives: [],
                error: false
            }
        },
        created() {
            this.fetchNarratives();
        },
        methods: {
            fetchNarratives() {
                this.$http
                    .get('http://localhost:3333/api/v1/Narrative/')
                    .then((response) => {
                        this.narratives = response.body
                    }, (response) => {
                        this.error = response.error
                    });
            },

            addNarrative() {
                this.$http
                    .put()
            }
        }
    }
</script>

<style lang="scss">
</style>