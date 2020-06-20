import { ProjectInfo, TagTypes } from '@/types';

const imgURL = '@/assets/projects/';
export const projectList: ProjectInfo[] = [ 
    {
      name: 'Pixel Studios',
      tags: [
        TagTypes.PYTHON,
      ],
      description: 'paint program lmao',
      images: [
        imgURL+"PixelStudios/stamps.png",
        imgURL+"PixelStudios/color.png",
        imgURL+"PixelStudios/paint.png",
        imgURL+"PixelStudios/paint2.png",
      ],
    },
    
    {
      name: 'Pixel Dungeon',
      tags: [
        TagTypes.GAME,
        TagTypes.PYTHON,
      ],
      description: 'roguelike dungeon crawler',
      images: [],
    },

    {
      name: 'Space Invaders Demastered',
      tags: [
        TagTypes.GAME,
        TagTypes.JAVA,
      ],
      description: 'space shooter made with libGDX',
      images: [],
    },
  ]