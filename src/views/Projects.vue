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
        <el-autocomplete 
          v-if="isInputtingTag" 
          class="new-tag-input inline-input" 
          @blur="onNewTagClosed"
          @keyup.enter.native="onCreateNewTag"
          :fetch-suggestions="getSuggestions"
          v-model="searchTagContents"
        >
          <!-- <template slot-scope="{ item }">
            <div class="value">{{ item.value }}</div>
          </template> -->
        </el-autocomplete>

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

  getSuggestions(queryString: string, cb: any) {
    const allTags = Object.keys(TagTypes)
    .map((key, index) => {
      return {"value": TagTypes[key].name.toLowerCase()};
    });

    const filter = queryString ? allTags 
      .filter((tagObj) => {
        return tagObj["value"].indexOf(queryString.toLowerCase()) === 0;
      }) : allTags;    

    console.log(filter)

    cb(filter);
  }

  onNewTagClicked() {
    this.isInputtingTag = true;
  }

  onNewTagClosed() {
    this.isInputtingTag = false;
  }

  // onCreateNewTag() {
  // }

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