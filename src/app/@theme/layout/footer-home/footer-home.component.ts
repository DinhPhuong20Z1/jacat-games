import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent implements OnInit {
  @Input() data: boolean;
  constructor() { }

  ngOnInit(): void {

  }

}
