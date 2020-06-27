<template>
    <div class="nav-body">
        <div class="navbar">
            <router-link 
                v-for="(nav,i) in this.navItems" 
                :key="i"
                :to="nav.link"
                v-tippy="{placement: 'bottom', arrow: 'true'}"
                :content="nav.label"
            >
                <font-awesome-icon :icon="nav.iconName" size="2x" />
            </router-link>
        </div>
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
            link: '/resume',
        },
    ]; 
}
</script>

<style scoped>

    .nav-body {
        position: fixed;
    }

    .navbar {
        display: flex;
        justify-content: right;
    }

    .navbar a {
        padding: .25rem;
        color: black;
    }

</style>