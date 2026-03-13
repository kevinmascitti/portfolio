// Assets from src/pages/images – import order by project and file number

// Televasion (video + images 1–4)
import TelevasionMp4 from "../pages/images/Televasion.mp4"
import Televasion1 from "../pages/images/Televasion1.gif"
import Televasion2 from "../pages/images/Televasion2.gif"
import Televasion3 from "../pages/images/Televasion3.png"
import Televasion4 from "../pages/images/Televasion4.png"

// Connecting Nature (video + images 1–8)
import ConnectingNatureMp4 from "../pages/images/ConnectingNature.mp4"
import ConnectingNature1 from "../pages/images/ConnectingNature1.jpg"
import ConnectingNature2 from "../pages/images/ConnectingNature2.jpg"
import ConnectingNature3 from "../pages/images/ConnectingNature3.jpg"
import ConnectingNature4 from "../pages/images/ConnectingNature4.jpg"
import ConnectingNature5 from "../pages/images/ConnectingNature5.jpg"
import ConnectingNature6 from "../pages/images/ConnectingNature6.jpg"
import ConnectingNature7 from "../pages/images/ConnectingNature7.jpg"
import ConnectingNature8 from "../pages/images/ConnectingNature8.jpg"

// Outer Words
import OuterWords1 from "../pages/images/OuterWords1.jpg"
import OuterWords2 from "../pages/images/OuterWords2.jpg"
import OuterWords3 from "../pages/images/OuterWords3.jpg"

// Andy's Room
import Andy1 from "../pages/images/Andy1.png"
import Andy2 from "../pages/images/Andy2.png"
import Andy3 from "../pages/images/Andy3.png"
import Andy4 from "../pages/images/Andy4.png"
import Andy5 from "../pages/images/Andy5.png"

// Arise of Cosmos
import Cosmos1 from "../pages/images/Cosmos1.png"
import Cosmos2 from "../pages/images/Cosmos2.png"
import Cosmos3 from "../pages/images/Cosmos3.png"
import Cosmos4 from "../pages/images/Cosmos4.png"
import Cosmos5 from "../pages/images/Cosmos5.png"

// Zurg Attack
import ZurgAttackMov from "../pages/images/ZurgAttack.mov"
import ZurgAttack1 from "../pages/images/ZurgAttack1.png"

// Rabbids & Motorola ADV
import MotorolaADVMp4 from "../pages/images/MotorolaADV.mp4"
import ADV1 from "../pages/images/ADV1.png"
import ADV2 from "../pages/images/ADV2.png"
import ADV3 from "../pages/images/ADV3.png"
import ADV4 from "../pages/images/ADV4.png"

export const projectAssets = {
  televasion: {
    video: TelevasionMp4 as string,
    images: [Televasion1, Televasion2, Televasion3, Televasion4] as string[],
    image: Televasion1 as string,
  },
  "connecting-nature": {
    video: ConnectingNatureMp4 as string,
    images: [
      ConnectingNature1,
      ConnectingNature2,
      ConnectingNature3,
      ConnectingNature4,
      ConnectingNature5,
      ConnectingNature6,
      ConnectingNature7,
      ConnectingNature8,
    ] as string[],
    image: ConnectingNature1 as string,
  },
  "outer-words": {
    images: [OuterWords1, OuterWords2, OuterWords3] as string[],
    image: OuterWords1 as string,
  },
  "andys-room": {
    images: [Andy1, Andy2, Andy3, Andy4, Andy5] as string[],
    image: Andy1 as string,
  },
  "arise-of-cosmos": {
    images: [Cosmos1, Cosmos2, Cosmos3, Cosmos4, Cosmos5] as string[],
    image: Cosmos1 as string,
  },
  "zurg-attack": {
    video: ZurgAttackMov as string,
    images: [ZurgAttack1] as string[],
    image: ZurgAttack1 as string,
  },
  "rabbids-motorola-adv": {
    video: MotorolaADVMp4 as string,
    images: [ADV1, ADV2, ADV3, ADV4] as string[],
    image: ADV1 as string,
  },
} as const
