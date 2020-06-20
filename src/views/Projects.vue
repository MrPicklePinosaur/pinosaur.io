<template>
  <div>
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
        <el-tag
            v-for="(tag, i) in searchTags"
            :key="i" 
            :style="{color: tag.textColor}"
            closable
            :color="tag.color"
            @close="onCloseTag(tag)"
        >{{tag.name}}</el-tag>
      </div>

      <div class="new-tag-main">
        <el-select 
          v-if="isInputtingTag" 
          class="new-tag-input inline-input" 
          popper-class=""
          placeholder="Select"
          v-model="searchTagContents"
          filterable
          no-match-text="No Matches"
          no-data-text="No Data"
          @blur="onSubmitTag"
          @change="onSubmitTag"
        ><el-option
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

    <project v-for="(p, i) in getProjectList" :key="i" :projectInfo="p"></project>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import Project from '@/components/Project.vue'
import { ProjectInfo, TagInfo, TagTypes } from '@/types'
import { Tag } from 'element-ui';

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  searchBarContents = '';
  searchTagContents = '';
  searchTags: TagInfo[] = [ TagTypes.FEATURED ];

  //tag search
  isInputtingTag = false;

  get getTagNames() {
    const selectedTagNames: string[] = this.searchTags.map((tag: TagInfo) => tag.name);

    return Object.keys(TagTypes)
      .map((key, index) => TagTypes[key].name)
      .filter((name: string) => !selectedTagNames.includes(name));
  }

  get getProjectList() {
    //if there are no options just shall all the projects (starting with featured)
    
    const selectedTagNames: string[] = this.searchTags.map((tag: TagInfo) => tag.name);

    // if (selectedTagNames.length === 0) { return projectList; }

    const filtered = projectList
      .filter((project: ProjectInfo) => { //filter by tags
        for (const searchTag of selectedTagNames) {
          const thisProjectTagNames = project.tags.map((tag: TagInfo) => tag.name);

          if (!thisProjectTagNames.includes(searchTag)) { return false; }
        }
        return true;
      })

    return filtered
  }

  onNewTagClicked() {
    this.isInputtingTag = true;
  }

  onSubmitTag() {
    const selectedTagNames: string[] = this.searchTags.map((tag: TagInfo) => tag.name);

    const results: TagInfo[] = Object.keys(TagTypes)
      .map((key,index) => TagTypes[key]) 
      .filter((tag: TagInfo) => tag.name===this.searchTagContents)
      .filter((tag: TagInfo) => !selectedTagNames.includes(tag.name)); //also tag not already slected
    if (results.length === 0) { return; } //no result found
    this.searchTags.push(results[0]);

    this.searchTagContents = ''; //clear selection
    this.isInputtingTag = false; //hide tag
  }

  onCloseTag(tag: TagInfo) {
    this.searchTags = this.searchTags.filter(({name}: TagInfo) => tag.name != name);
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