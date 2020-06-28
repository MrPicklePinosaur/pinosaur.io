<template>
  <div class="home">

    <div class="header">    

      <p style="color: white; font-weight: bold; font-size: 2rem; padding: 0; margin: 0;">Hey, I'm</p>

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
      <img
        v-for="(icon,i) in ['csharp_icon.png','java_icon.png','javascript_icon.png','python_icon.png','typescript_icon.png']" 
        :key="i"
        :src="require('@/assets/icons/'+icon)"
        class="skill-icon"
      />
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
      hoverColor: '#B0B0B0',
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
    padding-top: 7rem;    
    padding-bottom: 7rem;
    background: url('../assets/background.gif');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    image-rendering: pixelated;
  }

  .banner {
    width: 75%;
    height: auto;
    image-rendering: pixelated;
  }

  .links {

  }

  .about {
    box-shadow: 0 -1px 5px black;
    height: 20rem;
  }

  .link-icon {
    padding-left: .25rem;
    padding-right: .25rem;
    color: white; 
  }

  .link-icon svg {
    transition: all 0.3s;
  }

  .link-icon svg:hover {
    color: var(--hover-color);
  }

  .skill-icon {
    width: 2rem;
    height: auto;
    image-rendering: pixelated;
  }
</style>
