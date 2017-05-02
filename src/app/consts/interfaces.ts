export interface Category {
  _id: string;
  name: string;
  ukr: string;
  description: string;
  img: string;
}

export interface Steel {
  _id: string;
  name: string;
  description: string;
  critPointsTemperature?: object;
  chemicalComposition?: object;
  mechanicalProperties?: object[];
  mechPropDependingOnTestTemperature?: object[];
  techDetails?: object;
  heatResistance?: object[];
}
