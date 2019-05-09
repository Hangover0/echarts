<template>
  <div id="app">
    <echartsL/>
    <echartsR/>
  </div>
</template>

<script>
import echartsL from './components/echartsL'
import echartsR from './components/echartsR'
export default {
  name: 'App',
  components: {
    echartsL,
    echartsR
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
