import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-ng',
  imports: [FormsModule,CommonModule],
  templateUrl: './class-ng.html',
  styleUrl: './class-ng.css',
})
export class ClassNg {
  name: string = 'Pavithra';
  marks: number = 90;
}
