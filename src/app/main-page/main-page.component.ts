import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  ships: any[] = [];
  loading = true;
  error: any;
  input: any;

  type:string = "All";
  nameType = new FormControl("");

  page = 1;

  shipName: string = "";
  nameShipSearch = new FormControl("");

  portValue = [
    { id: 1, selected: false, port: 'Port Canaveral' },
    { id: 2, selected: false, port: 'Port of Los Angeles' },
    { id: 3, selected: false, port: 'Fort Lauderdale' }
  ];
  arrPort:string[] = [];

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            ships {
              name
              home_port
              type
              missions {
                name
              }
              weight_kg
              year_built
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.ships = result?.data?.ships;
        this.loading = result.loading;
        this.error = result.error;
      });
 

      if (localStorage.getItem("params")) {
        const params = JSON.parse(localStorage.getItem("params")!)
        this.arrPort = params.port;
        this.shipName = params.name;
        this.type = params.type;
        this.page = params.page;
        localStorage.removeItem("params")
      }
  }

  setValue(value: any) {
    this.router.navigate(["/card"])
    const ship = {
      name: value.name,
      home_port: value.home_port,
      type: value.type,
      missions: value.missions,
      weight_kg: value.weight_kg,
      year_built: value.year_built,
    }
    localStorage.setItem("ship", JSON.stringify(ship));

    const params = {
      port:this.arrPort,
      name:this.shipName,
      type: this.type,
      page: this.page
    }
    localStorage.setItem("params", JSON.stringify(params))
  }

  onChangePort(event: { target: any}){
    this.defaultPage();
    const value = event.target.value;
    const isCheked = event.target.checked;
    this.arrPort = [];
    this.portValue = this.portValue.map((el) => {
      if(el.port === value){
        el.selected = isCheked;
        return el;
      } 
      return el;
    }) 

    for (let i = 0; i < this.portValue.length; i++) {
      if (this.portValue[i].selected === true) {
        this.arrPort.push(this.portValue[i].port);
      }
    }
  }
  select(event:any){
    this.type = event.target.value;
    this.defaultPage();
  }
  defaultPage() {
    this.page = 1;
  }
}
