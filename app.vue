<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
</script>


<template>
  <div class="bg-black fixed w-screen h-screen">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <CreatePost
    :class="[
      {
        'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay
      },
      {
        'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay
      }
    ]"
    
    />
  </div>
</template>
