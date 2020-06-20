<template>
    <div>

        <el-card class="box-card" shadow="hover"> 
            <router-link :to="`projects/${this.projectUrl}`">{{projectInfo.name}}</router-link>

            <el-tag
                v-for="(tag, i) in projectInfo.tags"
                :key="i" 
                :color="tag.color"
                :style="{color: tag.textColor}"
            >{{tag.name}}</el-tag>
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

</style>