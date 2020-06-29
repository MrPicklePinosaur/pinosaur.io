<template> 

    <div class="nav-body">
        <div class="navbar">
            <router-link 
                v-for="(nav,i) in this.navItems" 
                :key="i"
                :to="nav.link"
                style="transition: all .3s"
            >
                <el-button 
                    size="small"
                    round
                    @mouseover.native="navItems[i].isHover=true"
                    @mouseleave.native="navItems[i].isHover=true"
                >
                    <font-awesome-icon :icon="nav.iconName" size="lg" />
                    <div 
                        style="margin-left: .25rem"
                        :style="{display: navItems[i].isHover?'inline-block':'none'}"
                    >
                        {{nav.label}}
                    </div>

                </el-button>
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
    isHover: boolean;
}

@Component
export default class Navbar extends Vue {

    navItems: navItem[] = [
        {
            label: 'Home',
            iconName: 'home',
            link: '/',
            isHover: false,
        },
        {
            label: 'Projects',
            iconName: 'code',
            link: '/projects',
            isHover: false,
        },
        {
            label: 'Resume',
            iconName: 'file-alt',
            link: '/resume',
            isHover: false,
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
</style>