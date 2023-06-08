<template>
    <router-link to="/">
        <div class="logo text-indigo-14 text-weight-bold">
            VEEL<span :class="carColor">CAR</span>
        </div>
    </router-link>
</template>

<script>
import { computed } from 'vue';

export default {
    name: "VeelcarLogo",
    props: {
        dark: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const carColor = computed(() => {
            return props.dark ? 'text-blue-grey-10' : 'text-indigo-2'
        })

        console.log(carColor.value)

        return {
            carColor
        }
    }
}
</script>

<style scope>
.logo {
    letter-spacing: 2px;
}
</style>