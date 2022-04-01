<template>
  <div class="home">
    <h1>Home</h1>
    <div :class="btnActive" @click="open = !open">{{ btnText }}</div>
    <transition name="bounceIn">
      <div v-if="open">
        <img class="logo1" alt="Vue logo" src="../assets/logo.png" />
        <img class="logo2" alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>
    </transition>
  </div>
</template>

<script>
/*  eslint-disable */

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data: function () {
    return {
      open: false,
    };
  },
  computed: {
    btnActive: function () {
      return "btn " + (this.open ? "active" : "");
    },
    btnText: function () {
      return this.open ? "Hide page" : "View page";
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home{
  min-height: 100vh;
}
.btn {
  padding: 10px 20px;
  background-color: grey;
  border-radius: 8px;
  display: inline-block;
  color: White;
  cursor: pointer;
  margin-bottom: 38px;
  transition: background 0.8s ease;
}
.btn.active {
  background: #42b983;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.logo1 {
  transform: rotate(90deg);
  border-top: 50px solid #42b983;
}
.logo2 {
  transform: rotate(-90deg);
  border-top: 50px solid #42b983;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s ease;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}

.bounceIn-enter-active,
.bounceIn-leave-active {
  transition: all 0.5s ease;
}

.bounceIn-enter-from,
.bounceIn-leave-to {
  opacity: 0;
  transform: translateY(400px);
  -webkit-transform: translateY(400px);
}
</style>
