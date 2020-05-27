import { Component, OnInit} from '@angular/core';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})

export class StartupComponent implements OnInit {
  diceNumber: Number = 0;
  table = 0;
  result = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // onStartClick (){
  //   this.diceNumber = Math.floor(Math.random()*10)-3;
  //   if(this.diceNumber <= 0){
  //     this.onStartClick();
  //   }
  //   else{}
  // }
  // onStartClick2(){
  //   var i;
  //   this.result = [];
  //   for(i=1;i<=10;i++){
  //     this.result.push(this.table*i);
  //   }
  // }

  // onStartClick(form: NgForm){
  //   console.log(form.value.title, form.value.content)
  //   // this.router.navigate(['/main']);
  // }
  onStartClick(){
    this.router.navigate(['/main']);
  }

}
