import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(type: number, ...args: unknown[]): string {
    switch (type ) {
        case 1 : return 'phone';
        case 2 : return 'smartphone';
        case 3 : return 'contacts';
    }
    return 'smartphone';
  }

}

