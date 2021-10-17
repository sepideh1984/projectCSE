import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.css']
})
export class SecondHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backPage(){
    this.router.navigate(['/'])

  }

}







