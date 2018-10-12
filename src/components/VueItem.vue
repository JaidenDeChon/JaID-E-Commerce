<template></template>

<script>
    import categories from '../assets/data.json'
    var data = JSON.parse(JSON.stringify(categories))

    export default {
        name: 'VueItem',
        data: function() {
            return {
                data
            }
        }
    }
</script>

<style></style>
