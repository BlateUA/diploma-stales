import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppWorkerService} from '../app-worker.service';
import {Steel} from '../consts/interfaces';
import { TechDetailsSchema, techDetailsSchema, CritPointsTemperatureSchema, critPointsTemperatureSchema } from '../consts/schemas';

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


  constructor(activeRoute: ActivatedRoute, api: AppWorkerService) {
    this.api = api;
    this.steelId = activeRoute.snapshot.params['id'];
    this.techDetailsSchema = techDetailsSchema;
    this.critPointsTemperatureSchema = critPointsTemperatureSchema;
  }

  ngOnInit() {
    this.api.getSteelById(this.steelId).subscribe(res => {
      this.steel = res[0];
      this.techDetailsSchema.cells = Object.keys(this.steel.techDetails).length;
      this.critPointsTemperatureSchema.cells = Object.keys(this.steel.critPointsTemperature).length;
    });
  }

}
