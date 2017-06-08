<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <b-table
                    :items="narratives"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    striped
                    hover>

                    <template slot="name" scope="item">
                        {{ item.value }}
                    </template>

                    <template slot="plot" scope="item">
                        {{ item.value }}
                    </template>

                    <template slot="active" scope="item">
                        {{ item.value ? 'Yes :)' : 'No :(' }}
                    </template>

                    <template slot="actions" scope="item">
                        <b-btn size="sm" @click="details(item.item)">Details</b-btn>
                    </template>

                </b-table>
            </div>
        </div>

        <div class="justify-content-center row my-1">
            <b-pagination
                :total-rows="this.items.length"
                :per-page="perPage"
                v-model="currentPage"
                size="md" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                narratives: [],
                fields: {
                    name: {
                        label: 'Name',
                        sortable: true
                    },
                    plot: {
                        label: 'Plot',
                        sortable: true
                    },
                    active: {
                        label: 'Active',
                        sortable: true
                    }
                },
                currentPage: 0,
                perPage: 5,
                error: false
            }
        },
        created() {
            this.fetchNarratives();
        },
        methods: {
            fetchNarratives() {
                return this.$http
                    .get('http://localhost:3333/api/v1/Narrative/')
                    .then((response) => {
                        this.narratives = response.body
                    }, (response) => {
                        this.error = response.error
                    });
            },
            filter() {

            }
        }
    }
</script>

<style lang="scss">
</style>