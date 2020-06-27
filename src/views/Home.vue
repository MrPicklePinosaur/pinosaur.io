<template>
  <div class="home">
    
    <p>Hey, I'm</p>

    <img class="banner" src="@/assets/banner1.gif"/>

    <div class="links">
      <a class="link-icon" href="https://github.com/MrPicklePinosaur">
          <font-awesome-icon :icon="['fab','github-square']" size="2x" />
      </a>
      <a class="link-icon" href="https://devpost.com/pinosaur">
          <font-awesome-icon :icon="['fab','dev']" size="2x" />
      </a>
      <a class="link-icon" href="https://pinosaur.itch.io/">
          <font-awesome-icon :icon="['fab','itch-io']" size="2x" />
      </a>
    </div>

    <p></p>

  </div>

</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

}
</script>

<style scoped>
  .banner {
    width: 75%;
    height: auto;
  }

  .links > * {
  }

  .link-icon {
    padding: .25rem;
    color: black; 
  }

</style>
