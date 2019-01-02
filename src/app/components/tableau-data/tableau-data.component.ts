import { Component, Input, OnChange, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-tableau-data',
	templateUrl: './tableau-data.component.html',
	styleUrls: ['./tableau-data.component.css']
})
export class TableauDataComponent implements OnChange {

    @Input() data: string;

	constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data'] && this.data) {
            console.log('data', this.data)
        }
    }
}
