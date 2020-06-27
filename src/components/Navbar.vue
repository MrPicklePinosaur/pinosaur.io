<template>
    <div class="nav-body">
        <router-link 
            v-for="(nav,i) in this.navItems" 
            :key="i"
            :to="nav.link"
            v-tippy="{placement: 'bottom', arrow: 'true'}"
            :content="nav.label"
        >
            <font-awesome-icon :icon="nav.iconName" size="small" />
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

type navItem = {
    label: string,
    iconName: string,
    link: string,
}

@Component
export default class Navbar extends Vue {

    navItems: navItem[] = [
        {
            label: 'Home',
            iconName: 'home',
            link: '/',
        },
        {
            label: 'Projects',
            iconName: 'code',
            link: '/projects',
        },
        {
            label: 'Resume',
            iconName: 'file-alt',
            link: '',
        },
    ]; 
}
</script>

<style scoped>

    .nav-body {
        display: flex;
        justify-content: right;
    }

    .nav-body a {
        padding: .25rem;
        color: black;
    }

</style>