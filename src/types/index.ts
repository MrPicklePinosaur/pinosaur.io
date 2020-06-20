
export type ProjectInfo = {
  name: string,
  tags: TagInfo[],
}

export type TagInfo = {
  name: string,
  color: string, //make this better typed later (custom color type or sm)
  textColor: string
}

interface TagTypes {
  [tagType: string]: TagInfo
}

export const TagTypes: TagTypes = {
  FEATURED: {
    name: 'Featured',
    color: '#FF0000',
    textColor: '#000000'
  }, 
  GAME: {
    name: 'Game',
    color: '#FF0000',
    textColor: '#000000'
  }, 
  PYTHON: {
    name: 'Python',
    color: '#FF0000',
    textColor: '#000000'
  }, 
  JAVA: {
    name: 'Java',
    color: '#FF0000',
    textColor: '#000000'
  }, 
};