import { Component } from "@angular/core";

import { Input, OnChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    //Create cropWidth property
    cropWidth: number = 75;

    constructor() {
        this.rating = 0;
        this.starWidth = 0;
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5; // 75px is the width of each star
    }
}