<script setup>

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
        <div id="BottomMenu" class="fixed z-50 flex w-full px-2 h-[70px] border-t border-t-gray-700 bg-black"></div>
    </div>
</template>