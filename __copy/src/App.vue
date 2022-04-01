<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="pageSwap" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "./scss/main.scss";
@import "./scss/animate2.scss";
</style>
