<template>
    <h1>item is working</h1>
</template>

<script>
    import categories from '../assets/data.json'
    var data = JSON.parse(JSON.stringify(categories))

    export default {
        name: 'VueItem',
        data: function() {
            return {
                data
            }
        },
        mounted: function() {
            console.log('VueItem.vue was loaded')
        }
    }
</script>

<style></style>
