<template>
    <div class="col items-center text-blue-grey-8">
        <div class="row justify-center">
            <h2>
                <Logo :dark=true />
            </h2>
        </div>
        <div class="row justify-center">
            <h6 id="main-title">404 Content you are searching is not found.</h6>
        </div>
        <div class="row justify-center">
            <router-link to="/">
                <q-btn rounded outline color="indigo-14" icon="fa-sharp fa-solid fa-arrow-left" label="back to veelcar" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Logo from 'src/components/Logo.vue';
export default {
    name: "NotFound",
    components: { Logo }
}
</script>