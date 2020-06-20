<template>
    <div>

        <el-card 
            class="box-card project-card" 
            shadow="hover"
            v-tippy="{placement: 'top', arrow: true}"
            content="project"
            allowHTML: true
        > 
            <router-link :to="`projects/${this.projectUrl}`">{{projectInfo.name}}</router-link>

            <div class="tag-list">
                <el-tag
                    v-for="(tag, i) in projectInfo.tags"
                    :key="i" 
                    :color="tag.color"
                    :style="{color: tag.textColor}"
                >{{tag.name}}</el-tag>
            </div>

            <p>{{ projectInfo.description }}</p>
        </el-card>

    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ProjectInfo } from '@/types'

    
@Component
export default class Project extends Vue{

    @Prop() readonly projectInfo!: ProjectInfo;

    get projectUrl(): string {
        return encodeURI(this.projectInfo.name);
    }
}

</script>

<style scoped>

    .project-card {
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    .tag-list {
        flex-direction: row;
    }

</style>