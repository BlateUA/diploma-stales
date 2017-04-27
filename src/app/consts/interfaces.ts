export interface Category {
  _id: string;
  name: string;
  ukr: string;
}

export interface Steel {
  _id: string;
  name: string;
  stamp: string;
  classification: string;
  description: string;
  analogs: Array<string>;
  chemicalComposition: Object;
  temperature: Object;
  technologicalProperties: Object;
  mechanicalProperties: Object;
}
