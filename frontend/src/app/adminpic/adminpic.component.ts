import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpic',
  templateUrl: './adminpic.component.html',
  styleUrls: ['./adminpic.component.css']
})
export class AdminpicComponent implements OnInit {
  image:String="assets/admin.jpg"
  

  constructor() { }

  ngOnInit(): void {
  }

}
