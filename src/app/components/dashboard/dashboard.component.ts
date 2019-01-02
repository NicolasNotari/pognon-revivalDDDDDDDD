import { Component, OnInit } from '@angular/core';

import { ReadDataService } from '../../services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	private pognonData: Array<Object> = [];

	constructor(private readDataService: ReadDataService) { }

	ngOnInit(): void {
		this.readDataService.parseData("http://localhost:4200/assets/sampleData.csv", this._initPognonData);
	}

	private _initPognonData(data: Array<Object>): void {
		this.pognonData = data;
	}
}
