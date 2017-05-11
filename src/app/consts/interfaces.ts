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
  category: string;
  description: string;
  critPointsTemperature?: object;
  chemicalComposition?: object;
  mechanicalProperties?: object[];
  mechPropDependingOnTestTemperature?: object[];
  techDetails?: object;
  heatResistance?: object[];
  dignity: string[];
  G: string[];
  E: string[];
}

interface Countable {
  name: string;
  cells: number;
}

export interface TechDetailsSchema extends Countable {
  forgingTemp?: string;
  weldability?: string;
  fragility?: string;
  grindability?: string;
}

export interface CritPointsTemperatureSchema extends Countable {
  Ac_1?: string;
  Ac_3?: string;
  Ar_1?: string;
  Ar_3?: string;
  Mn?: string;
}

export interface ChemicalCompositionSchema extends Countable {
  G?: string;
  Mn?: string;
  Si?: string;
  S?: string;
  P?: string;
  Cr?: string;
  Ni?: string;
  Cu?: string;
  C?: string;
  As?: string;
}

export interface MechanicalPropertiesSchema extends Countable {
  deliveryStatus?: string;
  crossSection?: string;
  tmpTensileStrength?: string;
  elongationAfterFracture?: string;
  HB?: string;
}

export interface PropertiesSchema extends Countable {
  'header'?: string;
  'label'?: string;
  'temp': string[];
}
