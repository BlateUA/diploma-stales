import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppWorkerService} from '../app-worker.service';
import { Steel, TechDetailsSchema, CritPointsTemperatureSchema, ChemicalCompositionSchema, MechanicalPropertiesSchema, PropertiesSchema } from '../consts/interfaces';
import { techDetailsSchema, critPointsTemperatureSchema, chemicalCompositionSchema, mechanicalPropertiesSchema, dignitySchema, eSchema, gSchema } from '../consts/schemas';
import { Charts } from './charts';

@Component({
  selector: 'app-stale-page',
  templateUrl: './steel-page.component.html',
  styleUrls: ['./steel-page.component.css']
})

export class SteelPageComponent implements OnInit {
  chartVisible = false;
  steelId: string;
  steel: Steel;
  api: AppWorkerService;
  techDetailsSchema: TechDetailsSchema;
  critPointsTemperatureSchema: CritPointsTemperatureSchema;
  chemicalCompositionSchema: ChemicalCompositionSchema;
  mechanicalPropertiesSchema: MechanicalPropertiesSchema;
  dignitySchema: PropertiesSchema;
  eSchema: PropertiesSchema;
  gSchema: PropertiesSchema;
  charts: Charts;
  getKeys(object: Object): any {
    return Object.keys(object);
  }
  getNumber(str: string): number {
    switch ( str[0] ) {
      case '<':
        return +str.split('<')[1];
      case '>':
        return +str.split('>')[1];
      default:
        return isNaN(+str.split('-')[1]) ? +str : +str.split('-')[1];
    }
  }

  constructor(activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
    this.steelId = activeRoute.snapshot.params['id'];
    this.techDetailsSchema = techDetailsSchema;
    this.critPointsTemperatureSchema = critPointsTemperatureSchema;
    this.chemicalCompositionSchema = chemicalCompositionSchema;
    this.mechanicalPropertiesSchema = mechanicalPropertiesSchema;
    this.eSchema = eSchema;
    this.gSchema = gSchema;
    this.dignitySchema = dignitySchema;
    this.charts = new Charts();
  }

  ngOnInit() {
    this.api.getSteelById(this.steelId).subscribe(res => {
      this.steel = res[0];
      if (this.steel.techDetails) {
        this.techDetailsSchema.cells = this.getKeys(this.steel.techDetails).length;
      }
      if (this.steel.critPointsTemperature) {
        this.critPointsTemperatureSchema.cells = this.getKeys(this.steel.critPointsTemperature).length;
      }
      if (this.steel.chemicalComposition) {
        const keys = this.getKeys(this.steel.chemicalComposition);
        this.chemicalCompositionSchema.cells = keys.length;
        this.charts.doughnutChartLabels = keys;
        keys.forEach(item => {
          this.charts.doughnutChartData.push(this.getNumber(this.steel.chemicalComposition[item][0]));
        });
      }
      if (this.steel.mechanicalProperties) {
        this.mechanicalPropertiesSchema.cells = this.getKeys(this.steel.mechanicalProperties[0]).length;
      }
      if (this.steel.E) {
        this.eSchema.cells = this.steel.E.length;
        this.charts.lineChartLabelsE = this.eSchema.temp;
        this.charts.lineChartDataE.push({data: this.steel.E, label: this.eSchema.header});
      }
      if (this.steel.G) {
        this.gSchema.cells = this.steel.G.length;
        this.charts.lineChartLabelsG = this.eSchema.temp;
        this.charts.lineChartDataG.push({data: this.steel.G, label: this.gSchema.header});
      }
      if (this.steel.dignity) {
        this.dignitySchema.cells = this.steel.dignity.length;
        this.charts.lineChartLabelsDignity = this.dignitySchema.temp;
        this.charts.lineChartDataDignity.push({data: this.steel.dignity, label: this.dignitySchema.header});
      }
    });
  }

}

