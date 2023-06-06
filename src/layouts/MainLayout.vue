<template>
  <q-layout class="comfortaa-font" view="hHh lpR fFf">

    <q-header elevated class="bg-blue-grey-10 text-blue-10">
      <q-toolbar>
        <q-toolbar-title>
          <Logo />
        </q-toolbar-title>
        <q-space />
        <div class="q-pa-md">
          <q-btn-dropdown split color="indigo-2" text-color="indigo-14" rounded label="Tools">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Compare tool</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Search tool</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-blue-grey-10 text-primary">
      <div class="row text-grey-8  q-ma-sm">
        <div class="col-5 column items-center q-pa-sm">
          <div class="row">veelcar.com</div>
          <div class="row">
            Madampe,
          </div>
          <div class="row">Sri Lanka.</div>
        </div>
        <div class="col-2 column items-center q-pa-auto">
          <div class="row">Contact us</div>
          <div class="row text-indigo-2">
            <i class="fa-brands fa-facebook-f q-px-xs"></i>Facebook
          </div>
          <div class="row text-indigo-2"><i class="fa-brands fa-twitter q-px-xs "></i>Twiter</div>
        </div>
        <div class="col-4 column items-center q-pa-sm ">
          <div class="row">It's all about vehicles</div>
        </div>
      </div>
    </q-footer>

    <q-page-container id="home-page" class="bg-indigo-1 text-indigo-3">
      <router-view />
    </q-page-container>



  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import Logo from 'src/components/Logo.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { Logo },
  setup() {
  }
})
</script>

<style>
#home-page {
  height: 100vh;
}
</style>
