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

    <q-page-container id="home-page" class="bg-indigo-2 text-indigo-14">
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
