<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <div id="main-layout" class="h-screen">
        <div class="w-full max-w-[500px] mx-auto">
            <div id="TopMenu" class="flex justify-center items-center w-full px-2 h-10 my-2">
                <img src="/threads-logo.png" alt="logo" class="w-[35px]">

            </div>
        </div>
        <div class="w-full max-w-[500px] mx-auto flex h-screen">
            <slot />
        </div>
        <div id="BottomMenu" class="fixed z-50 flex w-full px-2 h-[70px] border-t border-t-gray-700 bg-black bottom-0">
            <div class="w-full max-w-[500px] mx-auto flex justify-around items-center">
                <button @click="navigateTo('/')" class="w-full text-white h-full flex flex-col items-center">
                    <Icon class="mb-1 text-white" name="mdi:home" size="32" color="#ffffff" />
                    Home
                </button>
                <button @click="userStore.isMenuOverlay = true" class="w-full h-full flex flex-col items-center text-white">
                    <Icon class="mb-1 !text-white" name="mdi:pencil-box-outline" size="32" color="#ffffff" />
                    Edit
                </button>
                <button @click="userStore.isLogoutOverlay = true" class="w-full h-full flex flex-col items-center text-white">
                    <Icon class="mb-1 text-white" name="mdi:logout" size="32" color="#ffffff" />
                    Logout  
                </button>
            </div>
        </div>
    </div>
</template>