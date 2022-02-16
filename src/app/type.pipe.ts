import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(ships: any, shipsType: string) {
    if (shipsType === "All") {
      return ships;
    }
    return ships.filter((ship: any) => {
      return ship.type.toLowerCase() === shipsType.toLowerCase();
    })
  }

}
