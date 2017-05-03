/**
 * Created by viktor on 02.05.17.
 */

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

export const techDetailsSchema: TechDetailsSchema = {
  'name': 'Технологічні властивості',
  'forgingTemp': 'Температура кування, &deg;C',
  'weldability': 'Зварювання',
  'fragility': 'Схильність до крихкості',
  'grindability': 'Шліфуємість',
  'cells': 4
};

export interface CritPointsTemperatureSchema extends Countable {
  Ac_1?: string;
  Ac_3?: string;
  Ar_1?: string;
  Ar_3?: string;
  Mn?: string;
}

export const critPointsTemperatureSchema: CritPointsTemperatureSchema = {
  name: 'Температура критичних точок, &deg;C',
  Ac_1: 'Ac<sub>1</sub>',
  Ac_3: 'Ac<sub>3</sub>',
  Ar_1: 'Ar<sub>1</sub>',
  Ar_3: 'Ar<sub>3</sub>',
  Mn: 'Мн',
  cells: 5
};

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
}

export const chemicalCompositionSchema: ChemicalCompositionSchema = {
  name: 'Хімічний склад',
  G: 'G',
  Mn: 'Mn',
  Si: 'Si',
  S: 'S',
  P: 'P',
  Cr: 'Cr',
  Ni: 'Ni',
  Cu: 'Cu',
  C: 'C',
  cells: 9
};

export interface MechanicalPropertiesSchema extends Countable {
  deliveryStatus?: string;
  crossSection?: string;
  tmpTensileStrength?: string;
  elongationAfterFracture?: string;
  HB?: string;
}

export const mechanicalPropertiesSchema: MechanicalPropertiesSchema = {
  name: 'Механічні властивості',
  deliveryStatus: 'Стан поставки',
  crossSection: 'Переріз',
  tmpTensileStrength: '&sigma;',
  elongationAfterFracture: '&delta;',
  HB: 'HB',
  cells: 5
};
