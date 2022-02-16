import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {

  nameShip: string = "";
  home_port: string = "";
  type: string = "";
  missions:any[] = [];
  weight_kg: number = 0;
  year_built: number = 0;
  mission: string ="";

  constructor() { }

  ngOnInit(): void {
    let ship = JSON.parse(localStorage.getItem("ship")!)
    this.nameShip = ship.name;
    this.home_port = ship.home_port;
    this.type = ship.type;
    this.weight_kg = ship.weight_kg;
    this.year_built = ship.year_built;

    for (let index = 0; index < ship.missions.length; index++) {
      const element = ship.missions[index].name;
      this.missions.push(element)
    }
    this.mission = this.missions.join(", ")
  }

}
