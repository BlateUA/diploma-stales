import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppWorkerService} from '../app-worker.service';
import {Steel} from '../consts/interfaces';
import { TechDetailsSchema, techDetailsSchema, CritPointsTemperatureSchema, critPointsTemperatureSchema, ChemicalCompositionSchema, chemicalCompositionSchema, MechanicalPropertiesSchema, mechanicalPropertiesSchema } from '../consts/schemas';

@Component({
  selector: 'app-stale-page',
  templateUrl: './steel-page.component.html',
  styleUrls: ['./steel-page.component.css']
})

export class SteelPageComponent implements OnInit {

  steelId: string;
  steel: Steel;
  api: AppWorkerService;
  techDetailsSchema: TechDetailsSchema;
  critPointsTemperatureSchema: CritPointsTemperatureSchema;
  chemicalCompositionSchema: ChemicalCompositionSchema;
  mechanicalPropertiesSchema: MechanicalPropertiesSchema;

  getKeys(object: Object): any {
    return Object.keys(object);
  }

  constructor(activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
    this.steelId = activeRoute.snapshot.params['id'];
    this.techDetailsSchema = techDetailsSchema;
    this.critPointsTemperatureSchema = critPointsTemperatureSchema;
    this.chemicalCompositionSchema = chemicalCompositionSchema;
    this.mechanicalPropertiesSchema = mechanicalPropertiesSchema;
  }

  ngOnInit() {
    this.api.getSteelById(this.steelId).subscribe(res => {
      this.steel = res[0];
      if (this.steel.techDetails) {
        this.techDetailsSchema.cells = Object.keys(this.steel.techDetails).length;
      }
      if (this.steel.critPointsTemperature) {
        this.critPointsTemperatureSchema.cells = Object.keys(this.steel.critPointsTemperature).length;
      }
      if (this.steel.chemicalComposition) {
        this.chemicalCompositionSchema.cells = Object.keys(this.steel.chemicalComposition).length;
      }
      if (this.steel.mechanicalProperties) {
        this.mechanicalPropertiesSchema.cells = Object.keys(this.steel.mechanicalProperties[0]).length;
      }
    });
  }



}
