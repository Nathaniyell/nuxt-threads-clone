<script setup>
import { useUserStore } from '@/stores/user';
import { Icon } from '@iconify/vue';


const userStore = useUserStore();
// const client = useSupabaseClient();

// const logout = async () => {
//     await client.auth.signOut();
//     userStore.isLogoutOverlay = false;
//     return navigateTo('/')
// }

</script>

<template>
    <div id="Modal" class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md w-full">
        <div class="bg-black w-full max-w-[300px] mx-auto rounded-lg text-white border border-gray-600 p-2">
           <button @click="userStore.isLogoutOverlay = false" class="flex items-center justify-between bg-black w-full p-3">
          <span>Close Modal</span>
          <Icon icon="mdi:close" size="25" />
           </button>
           <div class="border-b border-b-gray-700 my-1" />

       <button class="flex items-center justify-between p-3 w-full bg-black">
           <span>Logout</span>
        <Icon icon="ph:sign-out" size="25" />
       </button>

        </div>
    </div>
</template>

