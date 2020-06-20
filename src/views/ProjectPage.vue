<template>
    <div>
        <h1>{{projectInfo.name}}</h1>
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