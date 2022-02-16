import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(ships: any, nameShips: string) {
    if(nameShips.trim() === "") {
      return ships;
    }  
    return ships.filter((ship:any) => {
      return ship.name.toLowerCase().includes(nameShips.toLowerCase());
    }) 
  }

}
