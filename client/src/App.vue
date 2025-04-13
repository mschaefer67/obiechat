<template>
  <img class="logo" alt="logo" src="./assets/squirrel.jpeg">
  <MainChat />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainChat from './components/MainChat.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainChat
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 300px;
  height: 300px;
}
</style>
