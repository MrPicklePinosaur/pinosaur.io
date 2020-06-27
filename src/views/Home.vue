<template>
  <div class="home">

    <div class="header">    

      <p style="color: black; padding: 0; margin: 0;">Hey, I'm</p>

      <img class="banner" src="@/assets/banner1.gif"/>

      <div class="links">

        <a 
          v-for="(contact,i) in contactIcons"
          :key="i"
          class="link-icon" 
          :href="contact.link"
        >
            <font-awesome-icon 
              :icon="['fab',contact.iconName]" 
              size="2x"
              :style="{'--hover-color': contact.hoverColor}"
            />
        </a>

      </div>
    </div>

    <div class="about">
      <p style="margin: 0">I am</p>
      <ul style="margin: 0; text-align: left">
        <li>a game developer</li>
        <li>an aspiring web developer</li>
        <li>a first year student at UWaterloo</li>

      </ul>
    </div>

  </div>

</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

  contactIcons = [
    {
      iconName: 'github',
      hoverColor: '#424242',
      link: '',
    },
    {
      iconName: 'dev',
      hoverColor: '#01579B',
      link: '',
    },
    {
      iconName: 'itch-io',
      hoverColor: '#F25958',
      link: '',
    },
  ]

}
</script>

<style scoped>

  .header {
    padding-top: 5rem;    
    padding-bottom: 3rem;
    background: url('../assets/background.png');
  }

  .banner {
    width: 75%;
    height: auto;
  }

  .links {

  }

  .about {
    box-shadow: 0 -2px 10px black;
    height: 20rem;
  }

  .link-icon {
    padding-left: .25rem;
    padding-right: .25rem;
    color: black; 
  }

  .link-icon svg:hover {
    color: var(--hover-color);
  }

</style>
