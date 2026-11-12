import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(value: String): String {
    return "Hello"+ value.charAt(0).toUpperCase()+value.slice(1)+"!";
  }
}
