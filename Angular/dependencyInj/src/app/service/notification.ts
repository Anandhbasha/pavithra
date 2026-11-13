import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  showSuccess(message:string){
    alert("Success:"+message)
  }
  showError(message:string){
    alert("ERROR:"+message)
  }
}
