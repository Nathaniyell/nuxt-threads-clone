<script setup>
const client = useSupabaseClient();
const user =useSupabaseUser();

watchEffect(()=>{
    if(user.value){
        // console.log(user.value);
       return navigateTo('/');
    }
})

const login = async (provider) => {
    const {data,error} = await client.auth.signInWithOAuth({
        provider: provider,
        redirectTo: window.location.origin,
    })
    if(error){
        console.log(error);
    }
 
}
</script>

<template>
    <div id="AuthPage" class="w-full h-screen pt-32">
     <div class="w-full">
        <div class="w-full flex items-center justify-center p-2 gap-4">
            <img src="/threads-logo.png" alt="logo" class="w-[35px]">
            <h1 class="text-2xl font-bold text-white">Threads</h1>
         
        </div>
        <div class="max-w-[350px] mx-auto text-white">
            <h2 class="text-center mb-6 mt-4">Login / Register</h2>
            <button @click="login('github')" class="flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold">
               <div class="flex items-center gap-2 justify-center">
                <img 
                    src="/github-logo.png" 
                    alt="github" 
                    class="rounded-full object-contain flex-shrink-0"
                    style="width: 25px; height: 25px; max-width: 25px; max-height: 25px;"
                >
                Github
               </div>
            </button>
        </div>
       </div>
    </div>
</template>