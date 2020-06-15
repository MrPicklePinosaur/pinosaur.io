<template>
  <div>

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

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  projectList = projectList;

}
</script>

<style>

</style>