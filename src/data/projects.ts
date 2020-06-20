import { ProjectInfo, TagTypes } from '@/types';

const imgURL = '@/assets/projects/';
export const projectList: ProjectInfo[] = [ 
    {
      name: 'Pixel Studios',
      tags: [
        TagTypes.PYTHON,
      ],
      description: 'paint program lmao',
      imageLinks: {
        'stamps': imgURL+'PixelDungeon/stamps.png'
      }, 
    },
    {
      name: 'Pixel Dungeon',
      tags: [
        TagTypes.GAME,
        TagTypes.PYTHON,
      ],
      description: 'roguelike dungeon crawler',
      imageLinks: {}, 
    },
    {
      name: 'Space Invaders Demastered',
      tags: [
        TagTypes.GAME,
        TagTypes.JAVA,
      ],
      description: 'space shooter made with libGDX',
      imageLinks: {}, 
    },
  ]