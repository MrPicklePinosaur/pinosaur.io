
export type ProjectInfo = {
  name: string,

}

export type TagInfo = {
    name: string,
    color: string, //make this better typed later (custom color type or sm)
}
export var TagTypes = {
   GAME: {
    name: 'Game',
    color: '#FF0000'
   }, 
};