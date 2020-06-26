<template>
    <div>
        
        <tippy
            :to="projectInfo.name"
            arrow="true"
            placement="right"
            interactive="true"
            :flipBehavior="['right','left']"
        >
            <div id="popup" class="hidden">
                <h1>{{projectInfo.name}}</h1>
                <p>{{projectInfo.description}}</p>
            </div> 
        </tippy>

        <router-link :to="`projects/${this.projectUrl}`">
            <el-card 
                class="box-card project-card" 
                shadow="hover"
                :name="projectInfo.name"
            > 
                <p>{{projectInfo.name}}</p>
                <div class="tag-list">
                    <el-tag
                        v-for="(tag, i) in projectInfo.tags"
                        :key="i" 
                        :color="tag.color"
                        :style="{color: tag.textColor}"
                    >{{tag.name}}</el-tag>
                </div>

            </el-card>
        </router-link>

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
        height: 15rem;
    }

    .tag-list {
        flex-direction: row;
    }

</style>