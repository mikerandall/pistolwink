<template>
    <form v-on:submit.prevent="onSubmit">
        <b-form-fieldset
            label="Name"
            :name="name"
            :label-size="1">

            <b-form-input v-model="name"></b-form-input>

        </b-form-fieldset>

        <b-form-fieldset
            description="A short description of the narrative."
            label="Description"
            :description="description"
            :label-size="1">

            <b-form-input v-model="description"></b-form-input>

        </b-form-fieldset>

        <b-form-fieldset
            description="A brief synopsis of the timeline."
            label="Plot"
            :plot="plot"
            :label-size="1">

            <b-form-input v-model="plot"></b-form-input>

        </b-form-fieldset>

        <b-form-fieldset
            description="The list of categories or hashtags the narrative joins."
            label="Categories"
            :categories="categories"
            :label-size="1">

            <b-form-input v-model="categories"></b-form-input>

        </b-form-fieldset>

        <b-form-fieldset
            description="List of characters involved in narrative."
            label="Characters"
            :characters="characters"
            :label-size="1">

            <b-form-select v-model="characters"
                :options="characters"
                calss="mb-3">
            </b-form-select>

        </b-form-fieldset>

        <b-form-fieldset
            description="The timeline for the narrative."
            label="Timeline"
            :timeline="timeline"
            :label-size="1">

            <b-form-input v-model="timeline"></b-form-input>

        </b-form-fieldset>


        <b-button :size="'lg'" :variant="'primary'" type="submit">
            Submit
        </b-button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                description: '',
                plot: '',
                categories: [],
                characters: [],
                timeline: null
            }
        }
    }
</script>

<style lang="scss">
</style>