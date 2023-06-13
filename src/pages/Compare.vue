<template>
    <div class="row q-pa-lg row justify-center items-center">
        <NewCompare />
    </div>
</template>

<script>
import NewCompare from 'src/components/NewCompare.vue';

export default {
    name: "ComaprePage",
    setup() {
        return {
            options: [
                'Toyota', 'Mitsubishi', 'Audi', 'BMW'
            ],
            year: [2012, 2013, 2014]
        }
    },
    components: { NewCompare }
}
</script>

<style>
#add-new-compare {
    min-width: 300px;
}
</style>