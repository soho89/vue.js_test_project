<template>
  <div id="app">
    <headerTest></headerTest>
    <chatbox></chatbox>
  </div>
</template>

<script>
import headerTest from './components/headerTest'
import chatbox from './components/chatbox'

export default {
  name: 'App',
  components: {
    headerTest,
    chatbox
  }
}
</script>

<style>
body {
  font-family: Rubik,sans-serif;
  font-size: 17px;
  line-height: 1.53em;
  color: #888;
  font-weight: 300;
  overflow-x: hidden!important;
  -webkit-font-smoothing: antialiased;
}


</style>
