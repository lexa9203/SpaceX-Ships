import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'port'
})
export class PortPipe implements PipeTransform {

  transform(ships: any, arrPort: string[]) {
    let arr: any[] = [];

    if (arrPort.length === 0) {
      return ships
    }

    if (ships) {
      ships.filter((ship: any) => {
        for (let i = 0; i < arrPort.length; i++) {
          if (arrPort[i].toLowerCase() == ship.home_port.toLowerCase()) {
            arr.push(ship);
          }
        }
      })
      return arr
    }

  }
}
