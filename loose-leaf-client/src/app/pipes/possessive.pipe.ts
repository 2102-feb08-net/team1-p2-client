import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'possessive'
})

export class PossessivePipe implements PipeTransform {

    transform(value: string): string {
        if (value == undefined) {
            return "";
        }
        if (value[value.length-1] === 's') {
            return value+'\'';
        }

        return value+"'s";
    }
}