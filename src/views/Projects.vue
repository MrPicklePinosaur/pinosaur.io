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

      <div class="new-tag-main">
        <el-select 
          v-if="isInputtingTag" 
          class="new-tag-input inline-input" 
          placeholder="Select"
          v-model="searchTagContents"
          filterable
          @keyup.enter.native="onCreateNewTag"
        >
          <el-option
            v-for="(tag,i) in getTagNames"
            :key="i"
            :label="tag"
            :value="tag"
          ></el-option>
        </el-select>

        <el-button v-else class="new-tag-tag" @click="onNewTagClicked">
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
import { ProjectInfo, TagInfo, TagTypes } from '@/types'

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  projectList: ProjectInfo[] = [];

  searchBarContents = '';
  searchTagContents = '';
  searchTags: TagInfo[] = [];

  //tag search
  isInputtingTag = false;

  get getTagNames() {
    return Object.keys(TagTypes).map((key,index) => key);
  }

  onNewTagClicked() {
    this.isInputtingTag = true;
  }

  onNewTagClosed() {
    this.isInputtingTag = false;
  }

  onCreateNewTag() {
    if (!Object.prototype.hasOwnProperty.call(TagTypes,this.searchTagContents)) {
      return; //if the tag is invalid, handle error or sm
    } 
    this.searchTags.push(TagTypes[this.searchTagContents]);
  }

  // onCloseTag() {
  // } 

  created() {
    this.projectList = projectList;
  }
}
</script>

<style>

  .new-tag-main {
  }

  .new-tag-input {
    width: 100%;
    height: 100%;
  }

  .new-tag-tag {
    width: 100%;
    height: 100%;

    padding: 1rem;
  }

</style>