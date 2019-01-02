import { Injectable } from '@angular/core';
import * as Papa from 'papaparse/papaparse.min.js';

@Injectable({
	providedIn: 'root'
})
export class ReadDataService {

	constructor() { }	

	parseData(url, callBack) {
    	Papa.parse(url, {
        	download: true,
        	dynamicTyping: true,
        	skipEmptyLines: true,
        	complete: function(results) {
            	callBack(results.data);
        	}
    	});
	}
}