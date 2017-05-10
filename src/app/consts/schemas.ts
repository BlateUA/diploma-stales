/**
 * Created by viktor on 02.05.17.
 */

import { TechDetailsSchema, CritPointsTemperatureSchema, ChemicalCompositionSchema, MechanicalPropertiesSchema, PropertiesSchema } from './interfaces';

export const techDetailsSchema: TechDetailsSchema = {
  'name': 'Технологічні властивості',
  'forgingTemp': 'Температура кування, &deg;C',
  'weldability': 'Зварювання',
  'fragility': 'Схильність до крихкості',
  'grindability': 'Шліфуємість',
  'cells': 4
};

export const critPointsTemperatureSchema: CritPointsTemperatureSchema = {
  name: 'Температура критичних точок, &deg;C',
  Ac_1: 'Ac<sub>1</sub>',
  Ac_3: 'Ac<sub>3</sub>',
  Ar_1: 'Ar<sub>1</sub>',
  Ar_3: 'Ar<sub>3</sub>',
  Mn: 'Мн',
  cells: 5
};

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
  As: 'As',
  cells: 9
};

export const mechanicalPropertiesSchema: MechanicalPropertiesSchema = {
  name: 'Механічні властивості',
  deliveryStatus: 'Стан поставки',
  crossSection: 'Переріз',
  tmpTensileStrength: '&sigma;',
  elongationAfterFracture: '&delta;',
  HB: 'HB',
  cells: 5
};

const temp = [
  '20',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
];

export const eSchema: PropertiesSchema = {
  name: 'Модуль нормальної пружності, Е, ГПа',
  header: 'E',
  label: 'Температура випробовування, &deg;C',
  temp: temp,
  cells: 10
};

export const gSchema: PropertiesSchema = {
  name: 'Модуль пружності при зсуві скрученням G, ГПа',
  header: 'G',
  label: 'Температура випробовування, &deg;C',
  temp: temp,
  cells: 10
};

export const dignitySchema: PropertiesSchema = {
  name: 'Густина p, кг/см<sup>3</sup>',
  header: 'p',
  label: 'Температура випробовування, &deg;C',
  temp: temp,
  cells: 10
};
