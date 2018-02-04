import { Pipe, PipeTransform } from '@angular/core'; // <- Importamos Pipe y PipeTransform

@Pipe({
    name: 'capitalizeFirst',
    pure: false
})

export class CapitalizeFirstPipe implements PipeTransform {
    transform(value: string, args: any[]) {
        if (value && value.length > 0) {
            return value.charAt(0).toUpperCase() + value.substr(1, value.length);
        }
        return value;

    }
}