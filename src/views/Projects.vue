<template>
  <div class="projects-main">

    <div class="header"> 

      <img class="projects-banner" :src="require('@/assets/projects_banner.png')" />

      <el-input
        class="project-search"
        autocomplete="off"
        spellcheck="off"
        placeholder="search projects"
        v-model="searchBarContents"
      ></el-input>

      <div class="tag-search-container"> 
        
        <el-tag
            class="selected-tag-tag"
            v-for="(tag, i) in searchTags"
            :key="i" 
            :style="{color: tag.textColor}"
            closable
            :color="tag.color"
            @close="onCloseTag(tag)"
        >{{tag.name}}</el-tag>

        <div class="new-tag-main">
          <el-select 
            v-if="isInputtingTag" 
            class="new-tag-input inline-input" 
            size="small"
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

          <el-button 
            v-else class="new-tag-button" 
            size="small"
            @click="onNewTagClicked"
          >
            + New Tag
          </el-button>
        </div>

      </div>

    </div>

    <div class="project-grid">
      <project v-for="(p, i) in getProjectList" :key="i" :projectInfo="p"></project>
      <div v-if="getProjectList.length==0">
        <p>Looks like there is nothing here :(</p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { projectList } from '@/data/projects'
import Project from '@/components/Project.vue'
import { ProjectInfo, TagInfo, TagTypes } from '@/types'
import { Tag } from 'element-ui';
import { namespace } from 'vuex-class'

const page = namespace('Page');

@Component({
  components: {
    Project
  }
})
export default class Projects extends Vue{

  searchBarContents = '';
  searchTagContents = '';

  @page.State
  public searchTags!: TagInfo[]; 

  //tag search
  isInputtingTag = false;

  @page.Getter
  public getTagNames!: string[]; 

  @page.Mutation
  public addTag!: (data: {tagInfo: TagInfo}) => void; 

  @page.Mutation
  public removeTag!: (data: {tagInfo: TagInfo}) => void; 

  get getProjectList() {
    //if there are no options just show all the projects (starting with featured)
    
    const selectedTagNames: string[] = this.searchTags.map((tag: TagInfo) => tag.name);

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
    this.addTag({tagInfo: results[0]});

    this.searchTagContents = ''; //clear selection
    this.isInputtingTag = false; //hide tag
  }

  onCloseTag(tag: TagInfo) {
    this.removeTag({tagInfo: tag});
  } 

}
</script>

<style>

  .projects-main {
    background-image: url('../assets/background2.gif');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    image-rendering: pixelated;

    height: 100vh;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .projects-banner {
    width: 30%;
    height: auto;
    margin-bottom: 1rem;

    transform: translateY(0px);
    animation: float 5s ease-in-out infinite;
  }

  .project-search {
    width: 25%;
  }
  .project-search input {
    text-align: center;
  }
  
  .tag-search-container {
    display: flex;
    flex-direction: row;
    align-items:center;

    padding: .5rem;
  }

  .new-tag-main {
    width: 6rem;
  }

  .new-tag-input {
    width: 100%;
  }

  .new-tag-button {
    width: 100%;

  }
  
  .project-grid {
    --min-card-size: 200px;

    margin-left: 1rem;
    margin-right: 1rem;

    display: grid;
    gap: 1rem;

    grid-template-columns: repeat(auto-fill, minmax(var(--min-card-size), 1fr));
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>