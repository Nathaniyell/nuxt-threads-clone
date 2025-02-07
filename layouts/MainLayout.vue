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
                <button @click="navigateTo('/')" class="flex justify-center items-center w-full h-full">
                    <Icon class="mb-1 text-white" name="material-symbols:home" size="32" />
                </button>
                <button @click="userStore.isMenuOverlay = true" class="flex justify-center items-center w-full h-full">
                    <Icon class="mb-1 text-white" name="material-symbols:edit-square-outline-rounded" size="32" />
                </button>
                <button @click="userStore.isLogoutOverlay = true"
                    class="flex justify-center items-center w-full h-full">
                    <Icon class="mb-1 text-white" name="material-symbols:logout" size="32" />
                </button>
            </div>
        </div>
    </div>
</template>