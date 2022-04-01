<template>
<div id="app" :class="mode ? 'dark' : ''">
    <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
    </div>
    <div class="toggleMode" @click="toggleMode" v-html="mode ? '🌞' : '🌕'"></div>
    <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</div>
</template>

<script>
import {
    ref
} from 'vue';

export default {
    name: 'App',

    setup() {
        const mode = ref(true)

         if(localStorage) {
            let localMode =  localStorage.getItem('vueapp_mode');

            if(localMode!= null) {
                try {
                    let parsedMode = JSON.parse(localMode);
                    mode.value = parsedMode
                } catch(e) {
                    localStorage.clear();
                }
            }
        }

        const toggleMode = () => {
            mode.value = !mode.value;

            if(localStorage != null) {
                localStorage.setItem('vueapp_mode', mode.value);
            }
        }

        return {
            mode,
            toggleMode
        };
    }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

/* route transitions */
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}
</style>
