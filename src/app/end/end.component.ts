import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
message: string;
response: any;
isSuccess: boolean = false;
isVisible: boolean = false;
timeTaken: number;
planet: string = "";
  constructor(
    private router: Router) {
      this.response = this.router.getCurrentNavigation().extras.state;
      console.log(this.response)
      this.check()
    }

  ngOnInit() {
  }

  check(){
    var data = this.response;
    var status = data.responseBody;
    console.log(status);
    if(status.response.status == "false"){
      this.message = "The prisnor was not found, try again";
      this.isSuccess = false;
      this.isVisible = true;
    }
    else{
      this.message = "Success! Congratulations on Finding Falcone. King Shan is mighty pleased.";
      this.isSuccess = true;
      this.timeTaken = status.time;
      this.planet = status.response.planet_name;
      this.isVisible = false;
    }
  }

  onClick() {
    this.router.navigate(['/main']);
  }
}
