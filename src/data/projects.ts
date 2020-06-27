import { ProjectInfo, TagTypes } from '@/types';

export const projectList: ProjectInfo[] = [ 
  {
    name: 'Pixel Studios',
    tags: [
      TagTypes.PYTHON,
    ],
    description: 'paint program lmao',
    images: [
      "PixelStudios/stamps.png",
      "PixelStudios/color.png",
      "PixelStudios/paint.png",
      "PixelStudios/paint2.png",
    ],
    links: {
      githubLink: 'https://github.com/MrPicklePinosaur/Pixel-Studios'
    }
  },
  
  {
    name: 'Pixel Dungeon',
    tags: [
      TagTypes.GAME,
      TagTypes.PYTHON,
    ],
    description: 'roguelike dungeon crawler',
    images: [
      "PixelDungeon/chest.png",
      "PixelDungeon/room.png",
    ],
    links: {
      githubLink: 'https://github.com/MrPicklePinosaur/Pixel-Dungeon',
    }
  },

  {
    name: 'Space Invaders Demastered',
    tags: [
      TagTypes.GAME,
      TagTypes.JAVA,
    ],
    description: 'space shooter made with libGDX',
    images: [],
    links: {

    }
  },

  {
    name: 'LegoStudioVR',
    tags: [

    ],
    description: 'LegoStudioVR provides an environment to create Lego builds, without needing to buy the bricks to do so.',
    images: [],
    links: {
      githubLink: 'https://github.com/MrPicklePinosaur/LegoStudioVR',
      devpostLink: 'https://devpost.com/software/legostudiovr-4cx9sb',
    }
  },

  {
    name: 'Soulless',
    tags: [
      TagTypes.GAME,
    ],
    description: 'LegoStudioVR provides an environment to create Lego builds, without needing to buy the bricks to do so.',
    images: [],
    links: {
      githubLink: 'https://github.com/HalfPixelStudios/Soulless',
      itchLink: 'https://nithinmuthukumar.itch.io/soulless',
    }
  }
]