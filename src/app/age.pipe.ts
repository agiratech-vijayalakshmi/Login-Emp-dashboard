import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number): number {
    let birthDate: any = new Date(value).getFullYear();
    let currentDate: any = new Date().getFullYear();
    let age = currentDate - birthDate;
    return age;
  }

}
