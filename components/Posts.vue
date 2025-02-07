<script setup>
import { Icon } from '@iconify/vue';
import { useUserStore } from '~/stores/user';

const emit = defineEmits(['isDeleted']);
const runtimeConfig = useRuntimeConfig();
const userStore = useUserStore();
const isDeleting = ref(false);
const isMenu = ref(false);
const isLike = ref(false);
const props = defineProps({
    post: {
        type: Object,
        required: true,
        validator: (post) => {
            return post && typeof post === 'object'
        },
        default: () => ({
            name: 'Anonymous',
            image: '/default-avatar.png',
            text: ''
        })
    },
});
// const client = useSupabaseClient();
// const user = useSupabaseUser();
</script>
<template>
    <div class="z-50 bottom-0 h-full w-full">
        <div class="py-2 w-full">
            <div class="flex items-center justify-between">
                <div class="flex items-center text-white">
                    <img :src="post?.image || '/default-avatar.png'" :alt="post?.name || 'User'"
                        class="rounded-full h-[35px] w-[35px] object-cover">
                    <h6 class="ml-2 font-semibold text-[18px]">{{ post?.name || 'Anonymous' }}</h6>
                </div>
                <div @click="isMenu = !isMenu" class="relative">
                    <button :disabled="isDeleting"
                        class="text-white flex items-center p-1 h-[24px] w-[24px] hover:bg-gray-800 rounded-full cursor-pointer"
                        :class="{ 'bg-gray-800': isMenu }">
                        <Icon v-if="!isDeleting" icon="mdi:dots-horizontal" class="text-[18px] text-white" />
                        <Icon v-else icon="eos-icons:bubble-loading" class="text-[18px] text-white" />
                    </button>
                    <div v-if="isMenu" class="absolute border border-gray-600 right-0 z-20 mt-1 rounded">
                        <button
                            class="flex items-center rounded gap-2 pl-4 pr-3 py-1 hover:bg-gray-900 cursor-pointer text-red-500">
                            <p>Delete</p>
                            <Icon icon="solar:trash-bin-trash-broken" class="text-[20px] text-red-500" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex relative items-center w-full">
                <div class="mx-auto w-[42px]">
                    <div class="absolute ml-4 mt-1 w-[1px] top-0 bg-gray-700 h-full" />
                </div>
            </div>
            <div class="w-[calc(100%-50px)] bg-black rounded-lg font-light text-sm relative">
                <p class="py-2 text-gray-300">
                    {{ post.text }}
                </p>
                <img v-if="post && post.picture" :src="post.picture" :alt="post.name"
                    class="mx-auto w-full mt-2 pr-2 rounded" />
                <div class="mt-4 mb-2 ml-2">
                    <button :disabled="isLike" class="flex items-center gap-1">
                        <Icon icon="mdi:heart"
                            class="text-[28px] text-white p-1 hover:bg-gray-800 rounded-full cursor-pointer" />
                    </button>
                    <div class="text-sm text-gray-500">
                        <div class="flex items-center gap-1">
                            <span>4</span>
                            <span>likes</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="relative inline-block text-gray-500 pt-1 pb-1.5">
            <div class="flex items-center">
                <div class="flex items-center flex-wrap text-white gap-1 w-[42px]">
                    <div class="flex items-center gap-1">
                        <img src="https://picsum.photos/id/202/50" alt="" class="rounded-full h-[14px] mt-2">
                        <img src="https://picsum.photos/id/223/50" alt="" class="rounded-full h-[17px]">

                    </div>
                    <div class="flex items-center">
                        <img src="https://picsum.photos/id/99/50" alt="" class="rounded-full h-[11px] ml-4">
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mt-3 bg-gray-800 h-[1px]" />
    </div>
</template>
