<template>
  <div>
    <p v-text="searchBarContents"></p>
    <!-- <div>
      <input
        class="search-bar"
        autocomplete="off"
        spellcheck="off"
        placeholder="search projects"
        v-model="searchBarContents"
      >
    </div> -->

    <div class="projectSearch-main">
      <div class="projectSearch-tags">

      </div>

      <input
        class="projectSearch-field"  
        autocomplete="off"
        spellcheck="false"
        v-model="searchBarContents"
      >
    </div>

    <el-tag effect="dark"> 
      <el-button type="primary">x</el-button>
      Tag 
    </el-tag>
    <project v-for="(p, i) in projectList" :key="i" :projectInfo="p"></project>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import Project from '@/components/Project.vue'
import { ProjectInfo } from '@/types'

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  projectList: ProjectInfo[] = [];

  searchBarContents = '';

  created() {
    this.projectList = projectList;
  }
}
</script>

<style>

  .projectSearch-main {
    display: flex;
    padding: 0;
    margin: 0;
    height: 2rem;

    border: 2px solid black;
    border-radius: 4px;

  }

  .projectSearch-tags {
    padding: 0;
    margin: 0;

  }

  .projectSearch-field {
    height: 100%;

    border: none;
    outline: none;

    padding: 0;
    margin: 0;

    box-shadow: none;
    resize: none;
    overflow: auto; 
    white-space: nowrap;
  }

</style>