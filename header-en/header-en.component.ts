import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-en',
  templateUrl: './header-en.component.html',
  styleUrls: ['./header-en.component.css']
})
export class HeaderEnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changLg(){
    this.router.navigate(['/'])
  }

}
