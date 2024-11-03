<template>
  <q-layout>
    <q-header elevated persistent>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="balance"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> UmunthuAI </q-toolbar-title>

        <div>
          <q-btn color="white" class="text-primary" text-color="primary" label="Kutuluka" @click="logOut" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Uncomment and use the drawer if needed -->
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container scrollable>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { logoutUser } from '../services/auth.service';
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value; // Toggles the drawer open/close
    };

    const logOut = async () => {
      const confirmed = await confirm('Mukutulusidwa ku sambali');
      if (confirmed) {
        await logoutUser();
      }
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      logOut,
    };
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>
