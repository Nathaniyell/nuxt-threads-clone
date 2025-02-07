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
            <div id="Post" class="z-40 bottom-0 max-h-[100vh-200px] w-full px-3 max-w-[500px] mx-auto">
                <div class="py-2 w-full">
                    <div class="flex items-center">
                        <div class="flex items-center text-white">
                            <img src="https://picsum.photos/id/223/50" alt="" class="w-[35px] rounded-full">
                            <p class="ml-2 font-semibold text-[18px]">
                                Nathan Dev
                            </p>
                        </div>
                    </div>
                    <div class="relative flex items-center w-full">
                        <div class="mx-auto w-[42px]">
                            <div class="absolute ml-4 mt-1 top-0 h-full bg-gray-700 w-[1px]" />
                        </div>
                        <div class="bg-black rounded-lg w-[calc(100%-50px)] font-light w-full">
                            <div class="pt-2 bg-black w-full text-gray-300">
                                <textarea id="textarea" v-model="text" @input="adjustTextAreaHeight"
                                    class="bg-black w-full h-full outline-none" placeholder="Start a thread..."
                                    style="resize: none;"></textarea>
                            </div>
                            <div class="w-full">
                                <div class="flex flex-col gap-2 py-1">
                                    <div v-if="fileDisplay">
                                        <img :src="fileDisplay" alt="" class="w-full mt-2 rounded-lg mx-auto mr-2">
                                    </div>
                                    <label for="fileInput">
                                        <Icon icon="clarity:paperclip-line" size="25" class="text-white cursor-pointer" />
                                        <input ref="file" type="file" id="fileInput" @change="onChange" class="hidden"
                                        hidden
                                        accept=".jpg,.jpeg,.png" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
