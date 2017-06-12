import { Component, OnInit } from '@angular/core';
import { AppWorkerService } from '../app-worker.service';
import { eSchema } from '../consts/schemas';
import {PropertiesSchema, Steel} from '../consts/interfaces';
import {Charts} from './charts';

const id1 = '59184e7df2644bc52aecdef4', // 08кп
  id2 = '59126056c360246538efd3c6'; // 20кп

@Component({
  selector: 'app-comparative-page',
  templateUrl: './comparative-page.component.html',
  styleUrls: ['./comparative-page.component.css']
})

export class ComparativePageComponent implements OnInit {

  steel1: Steel;
  steel2: Steel;
  eSchema: PropertiesSchema;
  charts: Charts;


  constructor(private api: AppWorkerService) {
    this.eSchema = eSchema;
    this.charts = new Charts();
  }

  ngOnInit() {
    this.api.getSteelById(id1).subscribe(steel1 => {
      this.steel1 = steel1[0];
      this.api.getSteelById(id2).subscribe(steel2 => {
        this.steel2 = steel2[0];
        if ( this.haveMechanicalProperties() ) {
          this.eSchema.cells = this.steel1.E.length;
          this.charts.lineChartLabelsE = this.eSchema.temp;
          this.charts.lineChartDataE.push({data: this.steel1.E, label: this.steel1.name});
          this.charts.lineChartDataE.push({data: this.steel2.E, label: this.steel2.name});
        }
      });
    });
  }

  haveMechanicalProperties() {
    return this.steel1.mechanicalProperties && this.steel2.mechanicalProperties;
  }

}
