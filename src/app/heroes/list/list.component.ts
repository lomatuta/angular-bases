import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public heroNames:string[]= ['Spiderman','Ironman','Hulk','Thor','Antman'];
  public deletedHero?:string;


  removeLastHero():void{
    this.deletedHero= this.heroNames.pop();



  }

}
