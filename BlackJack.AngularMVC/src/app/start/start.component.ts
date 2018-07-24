import { Component, OnInit } from '@angular/core';
import { StartInfoGameView } from 'ViewModels/GameViewModel/StartInfoGameView';
@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

    public countBots: Array<number> = [1, 2, 3, 4, 5];
    constructor() { }

    ngOnInit() {
    }
    onButtonClick() {
        console.log('click');
    }
}
