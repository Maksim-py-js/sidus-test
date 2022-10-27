<script setup lang="ts">
  import MainSection from './components/MainSection/MainSection.vue'
</script>

<template>
  <div class="main">
    <MainSection />
  </div>
</template>

<style scoped lang="scss">
.main {
  background: $dark;
  width: 100%;
  height: 100vh;
  font-size: 20px;
  font-family: sans-serif;
  text-transform: uppercase;
  overflow: hidden;
}
</style>
