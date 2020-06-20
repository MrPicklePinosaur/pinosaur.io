
export type ProjectInfo = {
  name: string,
  tags: TagInfo[],
}

export type TagInfo = {
  color: string, //make this better typed later (custom color type or sm)
}

interface TagTypes {
  [tagType: string]: TagInfo
}

export const TagTypes: TagTypes = {
  Game: {
    color: '#FF0000'
  }, 
  Python: {
    color: '#FF0000'
  }, 
  Java: {
    color: '#FF0000'
  }, 
};