<template>
    <div class="row q-pa-lg row justify-center items-center">

        <ComapreDetailBox v-for="comparison in comparisons" :key="comparison.id" :car="comparison"
            @deleteId="deleteComaprison" />
        <NewCompare v-show="showNewComapre" @addModelId="addComarison" />
    </div>
</template>

<script>
import { ref, watch } from 'vue';

import NewCompare from 'src/components/NewCompare.vue';
import ComapreDetailBox from 'src/components/ComapreDetailBox.vue';

export default {
    name: "ComaprePage",
    setup() {
        const comparisons = ref([]);

        const addComarison = function (modelId) {
            comparisons.value.push({ id: modelId, model: "Test model", year: "2013" })
        }

        const deleteComaprison = function (deleteId) {
            comparisons.value = comparisons.value.filter(function (comp) {
                console.log(comp.id, deleteId)
                return comp.id !== deleteId
            })
        }



        const showNewComapre = ref(true)

        watch(comparisons.value, (newcomparisons, oldComparisons) => {
            if (newcomparisons.length > 3) {
                showNewComapre.value = false;
            }
        })



        return {
            comparisons, addComarison, showNewComapre, deleteComaprison
        }
    },
    components: { NewCompare, ComapreDetailBox }
}
</script>

<style>
#add-new-compare {
    min-width: 300px;
}
</style>

