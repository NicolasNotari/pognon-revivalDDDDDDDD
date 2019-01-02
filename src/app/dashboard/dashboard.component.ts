import { Component, OnInit } from '@angular/core';

import { ReadDataService } from '../read-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	private pognonData Array<Object> = [];

	constructor(private readDataService: ReadDataService) { }

	ngOnInit() {
		this.readDataService.parseData("http://localhost:4200/assets/sampleData.csv", this.initPognonData);
	}

	initPognonData(data: Array<Object>) {
		this.pognonData = data;
	}

}
