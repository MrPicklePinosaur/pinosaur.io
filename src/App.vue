<template>
  <div id="app">
    <navbar>

    </navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/Navbar.vue'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {

}

</script>

<style>
@import "https://unpkg.com/element-ui/lib/theme-chalk/index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
