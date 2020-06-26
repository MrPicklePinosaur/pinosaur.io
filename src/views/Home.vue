<template>
  <div class="home">

    <h1>Daniel Liu</h1>
    <h4>pinosaur</h4>

    <a href="https://github.com/MrPicklePinosaur">
        <font-awesome-icon :icon="['fab','github-square']" size="2x" />
    </a>
    <a href="https://devpost.com/pinosaur">
        <font-awesome-icon :icon="['fab','dev']" size="2x" />
    </a>
    <a href="https://pinosaur.itch.io/">
        <font-awesome-icon :icon="['fab','itch-io']" size="2x" />
    </a>

  </div>

</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

}
</script>
