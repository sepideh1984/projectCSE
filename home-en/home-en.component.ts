
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.css']
})
export class HomeEnComponent implements OnInit {

  constructor( private roter: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.roter.navigate(['/user'])

  }
}
