<template>
    <div>
        <h1>{{projectInfo.name}}</h1>
        <p>{{this.$route.params.id}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import { ProjectInfo } from '@/types';

@Component
export default class ProjectPage extends Vue {

    id = this.$route.params.id;

    projectInfo?: ProjectInfo;

    mounted() {
        this.projectInfo = projectList.find(p => p.name == decodeURI(this.$route.params.id));
    }
}

</script>

<style>

</style>