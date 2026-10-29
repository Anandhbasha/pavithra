import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  //input method
  // @Input() studentName:string="";
  // output method
  @Output()
  // Decor->custom event to listen a parent
  // EventEmitter -> it will emit data
  // emit->send
  messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit("Hello Parent")
  }
}
