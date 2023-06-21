import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(type: number, ...args: unknown[]): string {
    switch (type ) {
        case 1 : return 'Residencial';
        case 2 : return 'Celular';
        case 3 : return 'Contato';
    }
    return 'Residencial';
  }

}
