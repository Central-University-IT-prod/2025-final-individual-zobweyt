import { CustomizationPart } from "./types";

export const outfitKeys = [
  "1",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "2",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const;

export type OutfitKey = (typeof outfitKeys)[number];

export const outfits: Record<OutfitKey, CustomizationPart> = {
  "1": { price: 0, path: "/outfit/1.svg" },
  "10": { price: 30, path: "/outfit/10.svg" },
  "11": { price: 50, path: "/outfit/11.svg" },
  "12": { price: 70, path: "/outfit/12.svg" },
  "13": { price: 40, path: "/outfit/13.svg" },
  "14": { price: 60, path: "/outfit/14.svg" },
  "15": { price: 80, path: "/outfit/15.svg" },
  "16": { price: 90, path: "/outfit/16.svg" },
  "17": { price: 20, path: "/outfit/17.svg" },
  "18": { price: 10, path: "/outfit/18.svg" },
  "19": { price: 100, path: "/outfit/19.svg" },
  "2": { price: 30, path: "/outfit/2.svg" },
  "20": { price: 50, path: "/outfit/20.svg" },
  "21": { price: 70, path: "/outfit/21.svg" },
  "22": { price: 40, path: "/outfit/22.svg" },
  "23": { price: 60, path: "/outfit/23.svg" },
  "24": { price: 80, path: "/outfit/24.svg" },
  "25": { price: 90, path: "/outfit/25.svg" },
  "3": { price: 10, path: "/outfit/3.svg" },
  "4": { price: 0, path: "/outfit/4.svg" },
  "5": { price: 30, path: "/outfit/5.svg" },
  "6": { price: 50, path: "/outfit/6.svg" },
  "7": { price: 70, path: "/outfit/7.svg" },
  "8": { price: 90, path: "/outfit/8.svg" },
  "9": { price: 100, path: "/outfit/9.svg" },
} as const;

export default outfits;
