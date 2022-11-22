export interface IWhale {
  _id: number;
  name: string;
  image: string,
  scientificName: string;
  length: string;
  weight: string;
  description: string;
}

export interface CardData{
  imageId: string;
  state: 'default' |  'flipped' | 'matched';
}


