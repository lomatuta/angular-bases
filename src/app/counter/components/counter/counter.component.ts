import { Component } from "@angular/core";



@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="decreaseValue()">-1</button>
        <button (click)="restartValue()">Reset</button>

    `
})
    export class counterComponent{

        public counter:number = 10;

        public increaseBy(value: number):void{
          this.counter += value;
        }

        public decreaseValue():void{
          this.counter -= 1;
        }

        public  restartValue():void{
          this.counter = 10;
    }
}
