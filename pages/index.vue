<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useUserStore } from '../stores/user';
import { useSupabaseUser } from '../composables/useSupabaseUser';
const userStore = useUserStore();
const user = useSupabaseUser();
let posts = ref([]);
let isPostsLoading = ref(false);
let isPosts = ref(false);

watchEffect(() => {
    if (!user.value) {
        return navigateTo('/login');
    }
})

onBeforeMount(async () => {
    posts.value = [
        {
            name: 'John Doe',
            image: 'https://picsum.photos/200/300',
            text: 'This is a test post',
            picture: 'https://picsum.photos/200/300',
        },
    ];
    isPostsLoading.value = true;
    // posts.value = await userStore.getPosts();
    isPostsLoading.value = false;
    isPosts.value = true;
});
</script>


<template>
    <MainLayout>
        <div id="IndexPage" class="w-full overflow-auto">
            <div class="mx-auto max-w-[500px] overflow-hidden">
                <div id="Posts" class="mx-auto max-w-[600px] px-4">
                    <div v-if="isPosts" v-for="post in posts" :key="post">
                        <Post :post="post" @isDeleted="posts = []" />

                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
