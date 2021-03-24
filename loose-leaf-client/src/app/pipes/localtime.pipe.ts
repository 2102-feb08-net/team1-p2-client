import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'localtime'
})

export class LocalTimePipe implements PipeTransform {

    transform(value: string, args: string): string {
        if (value == undefined) {
            return "";
        }
        
        let date = new Date(value);

        if (args === 'date') {
            return date.toLocaleDateString();
        }
        return date.toLocaleString();
    }
}