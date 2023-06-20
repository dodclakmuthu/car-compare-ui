<template>
    <q-card class="new-comare-card bg-blue-1 text-blue-grey-10 items-center q-ma-sm">
        <i class="fa-solid fa-x" @click="deleteComparison"></i>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur id, sapiente ratione, temporibus accusantium
            nam excepturi, perferendis officiis ipsum autem alias similique totam. Natus enim expedita eum, animi laboriosam
            ducimus nihil alias nesciunt rerum iure deleniti, dolores earum, nostrum voluptatibus maxime unde velit
            consequuntur aliquid numquam ad aliquam? Quo, facere.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dolores magni cupiditate asperiores neque vitae
            autem alias doloribus, obcaecati molestias quis aliquam! Quasi, fugit molestiae! Possimus, delectus. Mollitia
            eos repudiandae nostrum. Illum vel molestiae ab excepturi libero cumque odio odit, explicabo facere officia aut
            voluptates error ex? Ab laudantium ipsum facere ut omnis tempora odit sapiente ipsam suscipit sint repellat
            recusandae dolore, vel eligendi illum voluptatibus. Nemo deleniti suscipit dolores optio? Iusto, praesentium
            molestias a expedita velit porro fugiat at.
        </q-card-section>
    </q-card>
</template>

<script>
export default {
    name: "ComapreDetailBox",
    props: {
        car: {
            type: Object,
            required: true
        }
    },
    setup(props, context) {
        function deleteComparison() {
            context.emit("deleteId", props.car.id)
        }

        return {
            deleteComparison
        }
    },
    emits: ["deleteId"]
}
</script>


<style scoped>
.new-comare-card {
    max-width: 300px;
    min-width: 250px;
    /* max-height: 80vh; */
    border: 3px solid #5880EE;
    /* height: 200px; */
    border-radius: 15px;
}

.new-comare-card:hover {
    transform: translateX(2px);
    box-shadow: 3px 3px 10px #312E76;
}

i {
    position: absolute;
    margin: 5px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: white;
    font-weight: bold;
}

i:hover {
    transform: scale(1.5);
    color: black;
}
</style>