<script setup>
import { v4 as uuidv4 } from 'uuid';
import { useUserStore } from '~/stores/user';
import { Icon } from '@iconify/vue';

const userStore = useUserStore();


// const client = useSupabaseClient();
// const user = useSupabaseUser();

let text = ref(null);
let isLoading = ref(false);
let file = ref(null);
let fileDisplay = ref(null);
let fileData = ref(null);
const adjustTextAreaHeight = () => {
    var textarea = document.getElementById('textarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
const clearData = () => {
    text.value = null;
    isLoading.value = false;
    file.value = null;
    fileDisplay.value = null;
    fileData.value = null;
}

const onChange = () => {
    fileDisplay.value = URL.createObjectURL(file.value.files[0]);
    fileData.value = file.value.files[0];
}

</script>



<template>
    <div id="CreatePost" class="fixed z-50 bottom-0 h-full w-full overflow-hidden">
        <div class="bg-black h-full w-full text-white overflow-auto">
            <div class="flex items-center justify-start py-4 mx-auto border-b border-b-gray-700 max-w-[500px]">
           <button @click="userStore.isMenuOverlay = false; clearData()" class="rounded-full px-2">
            <Icon icon="mdi:close" size="25" />
           </button>
           <div class="font-semibold text-base">
            New Thread
           </div>
            </div>
        </div>

    </div>
</template>
