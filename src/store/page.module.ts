import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import {  TagInfo, TagTypes } from '@/types'

//stores misc page state
@Module({namespaced: true, name: 'page'})
class Page extends VuexModule {
    
  searchTags: TagInfo[] = [ TagTypes.FEATURED ];

  get getTagNames(): string[] {
    const selectedTagNames: string[] = this.searchTags.map((tag: TagInfo) => tag.name);

    return Object.keys(TagTypes)
      .map((key, index) => TagTypes[key].name)
      .filter((name: string) => !selectedTagNames.includes(name));
  }
}
export default Page;