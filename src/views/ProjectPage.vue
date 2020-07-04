<template>
    <div>
        <h1 style="margin: 0;">{{projectInfo.name}}</h1>

        <a 
            :href="projectInfo.links.githubLink"
            v-if="projectInfo.links.githubLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','github-square']" size="2x" />
        </a>
        <a 
            :href="projectInfo.links.devpostLink"
            v-if="projectInfo.links.devpostLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','dev']" size="2x" />
        </a>
        <a 
            :href="projectInfo.links.itchLink"
            v-if="projectInfo.links.itchLink !== undefined"
        >
            <font-awesome-icon :icon="['fab','itch-io']" size="2x" />
        </a>

        <p>{{projectInfo.description}}</p>

        <el-carousel
            :interval="4000"
            type="card"
        >
            <el-carousel-item
                v-for="(img,i) in projectInfo.images"
                :key="i"
            >
                <img :src="require('@/assets/projects/'+img)" />
            </el-carousel-item>
        </el-carousel>

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