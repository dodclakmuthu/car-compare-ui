<template>
  <div class="col items-center text-blue-grey-8">

    <div class="row justify-center">
      <h2>
        <Logo :dark=true />
      </h2>
    </div>

    <div class="row justify-center">
      <h6 id="main-title">IT'S ALL ABOUT VEHICLES</h6>
    </div>
    <div class="row">
      <div class="col row justify-end q-mx-sm">
        <q-btn outline rounded color="indigo-14">Comapre</q-btn>
      </div>
      <div class="col q-mx-sm">
        <q-btn outline rounded color="indigo-14">Search</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from 'src/components/Logo.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { Logo }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');


#main-title {
  font-family: 'Kalam', cursive;
}
</style>