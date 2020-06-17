
export type ProjectInfo = {
  name: string,
  tags: TagInfo[],
}

export type TagInfo = {
  name: string,
  color: string, //make this better typed later (custom color type or sm)
}

interface TagTypes {
  [name: string]: TagInfo
}

export const TagTypes: TagTypes = {
  GAME: {
    name: 'Game',
    color: '#FF0000'
  }, 
  PYTHON: {
    name: 'Python',
    color: '#FF0000'
  }, 
  JAVA: {
    name: 'Java',
    color: '#FF0000'
  }, 
};