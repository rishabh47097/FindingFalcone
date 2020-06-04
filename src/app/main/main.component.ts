import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../app-data.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  Planets;
  Vehicles;
  tokenData;
  showImage:boolean = false;
  planetNameTemp:string;
  vehicleNameTemp:string;
  planet_names:any = [];
  vehicle_names:any = [];
  totalSelection:number = 0;
  timeTaken:number = 0;
  imgPlanet:any;
  imgVehicle:any;
  isVisible:string = "hidden";

  constructor(
    private appData: AppDataService,
    private router: Router,) {
      this.apiServiceCall();
  }

  ngOnInit() {
  }

  async apiServiceCall() {
    this.Planets = await this.appData.fetchPlanets();
    console.log(this.Planets);

    this.Vehicles = await this.appData.fetchVehicles();
    console.log(this.Vehicles);

    this.tokenData = await this.appData.fetchToken();
    console.log(this.tokenData);
  }

  onAdd() {
    if(this.totalSelection <= 3){
    var planetIndex = this.Planets.findIndex(index => index.name === this.planetNameTemp);
    var vehicleIndex = this.Vehicles.findIndex(index => index.name === this.vehicleNameTemp);
    this.calculateTimeTaken(planetIndex, vehicleIndex);
    this.Planets.splice(planetIndex,1);
    if(this.Vehicles[vehicleIndex]?.total_no >> 1){
      this.Vehicles[vehicleIndex].total_no = this.Vehicles[vehicleIndex].total_no - 1;;
    }
    else{
      this.Vehicles.splice(vehicleIndex,1);
    }
    this.planet_names.push(this.planetNameTemp);
    this.vehicle_names.push(this.vehicleNameTemp);
    this.totalSelection++;
    this.resetSelection();
    }
    else{
      alert("King has just the resource to search only 4 planets")
    }
  }

  pushData(data, type) {
    if(type == "planet"){
      this.planetNameTemp = data;
      this.imgPlanet = "assets/"+this.planetNameTemp+".png";
      document.getElementById("imagePlanet").style.visibility = "visible";
      var planetIndex = this.Planets.findIndex(index => index.name === this.planetNameTemp);
      for(var i=0; i<this.Vehicles.length; i++){
        if( this.Vehicles[i]?.max_distance < this.Planets[planetIndex]?.distance){
          this.Vehicles[i].isDisabled = true;
        }
        else{
          this.Vehicles[i].isDisabled = false;
        }
      }
    }
    else{
      this.vehicleNameTemp = data;
      this.imgVehicle = "assets/"+this.vehicleNameTemp+".png";
      document.getElementById("imageVehicle").style.visibility = "visible";
      var vehicleIndex = this.Vehicles.findIndex(index => index.name === this.vehicleNameTemp);
      for(var i=0; i<this.Planets.length; i++){
        if(this.Planets[i]?.distance > this.Vehicles[vehicleIndex]?.max_distance){
          this.Planets[i].isDisabled = true;
        }
        else{
          this.Planets[i].isDisabled = false;
        }
      }
    }
    var vehicleIndex = this.Vehicles.findIndex(index => index.name === this.vehicleNameTemp);
  }

  resetSelection() {
    for(var i=0; i<this.Vehicles.length; i++){
      this.Vehicles[i].isDisabled = false;
    }
    for(var i=0; i<this.Planets.length; i++){
      this.Planets[i].isDisabled = false;
    }
    this.planetNameTemp = null;
    this.vehicleNameTemp = null;
    document.getElementById("imagePlanet").style.visibility = "hidden";
    document.getElementById("imageVehicle").style.visibility = "hidden";
  }

  calculateTimeTaken(planetIndex, vehicleIndex) {
    var planetDistance = this.Planets[planetIndex].distance;
    var vehicleSpeed = this.Vehicles[vehicleIndex].speed;
    var time = planetDistance/vehicleSpeed;
    this.timeTaken = this.timeTaken+time;
  }

  async onSubmit(){
    if(this.totalSelection == 4){
      const requestBody = {
        token: this.tokenData.token,
        planet_names:this.planet_names,
        vehicle_names:this.vehicle_names};
      var responseBody = await this.appData.findFalcone(requestBody);
      responseBody = {response: responseBody, time: this.timeTaken};
      this.router.navigate(['/end'], {
        state: {responseBody}});
    }
    else{
      alert("Please select 4 planets and vehicles")
    }

  }
}