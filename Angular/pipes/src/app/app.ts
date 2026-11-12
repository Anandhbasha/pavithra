import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingPipe } from './greeting-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,DatePipe,PercentPipe,GreetingPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userName = "Anandh"
  city="Salem"
  course="full stack development"
  amount = 78.5678
  today = new Date()
  intrest = 0.85
  nameList = ["Vijay","Arun","Abi","Tharun","Manoj","Muthu"]
  sortList = this.nameList.sort()
  nums = [20,11,8,7,9,102]
  orderlist = this.nums.sort((a,b)=>a-b).reverse()
  twodig = this.nums.filter((x)=>x>10)
}
