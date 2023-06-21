<template>
    <q-card class="new-comare-card bg-blue-1 text-blue-grey-10 items-center">
        <q-card-section>
            <div class="text-h6 text-center">Add new compare</div>
            <div class="text-h3 text-center">
                <i class="fa-solid fa-car"></i>
            </div>
        </q-card-section>
        <q-card-section>
            <q-select rounded dense outlined label="Make" transition-show="jump-up" transition-hide="jump-up"
                :options="makes" v-model="make" />
        </q-card-section>
        <q-card-section>
            <q-input rounded dense outlined bg-color="blue-2" v-model="model" color="blue-grey-10" label="Model" />
        </q-card-section>
        <q-card-section class="row justify-center">
            <q-btn color="blue-grey-10" @click="addNewCarToComparisons" label="Add"><i
                    class="fa-solid fa-plus q-pa-sm"></i></q-btn>
        </q-card-section>
    </q-card>
</template>


<script>
import { ref } from 'vue'

export default {
    name: "NewCompare",
    setup(props, context) {

        const model = ref("")
        const make = ref("")

        const makes = ref([
            "Toyota", "Nissan", "BMW", "Benz"
        ])

        function addNewCarToComparisons() {
            context.emit('addModelId', Math.round(Math.random() * 100000000))
        }

        return { makes, addNewCarToComparisons, model, make }
    },
    emits: ["addModelId"]
}
</script>

<style>
.new-comare-card {
    min-width: 250px;
    border: 3px solid #5880EE;
    /* height: 200px; */
    border-radius: 15px;
}

.new-comare-card:hover {
    transform: translateX(2px);
    box-shadow: 3px 3px 10px #312E76;
}
</style>
