<template>
    <div>
        <h1>{{projectInfo.name}}</h1>

        <a 
            :href="this.projectInfo.links.githubLink"
            v-if="this.projectInfo.links.githubLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','github-square']" size="2x" />
        </a>
        <a 
            :href="this.projectInfo.links.devpostLink"
            v-if="this.projectInfo.links.devpostLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','dev']" size="2x" />
        </a>
        <a 
            :href="this.projectInfo.links.itchLink"
            v-if="this.projectInfo.links.itchLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','itch-io']" size="2x" />
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import { ProjectInfo } from '@/types';

@Component
export default class ProjectPage extends Vue {

    projectInfo?: ProjectInfo;

    created() {
        this.projectInfo = projectList.find(p => p.name == decodeURI(this.$route.params.id));
    }
}

</script>

<style>

</style>