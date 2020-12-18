<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "@/components/Main";

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
@import "~ant-design-vue/dist/antd.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
