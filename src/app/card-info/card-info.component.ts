import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  constructor() { }
  nom="Mekki";
  prenom="Anissa";
  job="developpeuse web"
  citation="aimez-vous :)";
  description="je développe des applications web";
  mot="angular, dotnet core";
  ngOnInit() {
  }

}
