<template>
  <div>
    <p v-text="searchBarContents"></p>
    <div>
      <el-input
        autocomplete="off"
        spellcheck="off"
        placeholder="search projects"
        v-model="searchBarContents"
      ></el-input>
    </div>

    <div>
      
      <div>

      </div>

      <div>
        <el-input >
        </el-input>
        <el-button>
          + New Tag
        </el-button>
      </div>

    </div>

    <project v-for="(p, i) in projectList" :key="i" :projectInfo="p"></project>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import Project from '@/components/Project.vue'
import { ProjectInfo, TagInfo } from '@/types'

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  projectList: ProjectInfo[] = [];

  searchBarContents = '';
  searchTags: TagInfo[] = [];

  created() {
    this.projectList = projectList;
  }
}
</script>

<style>
</style>