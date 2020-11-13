import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-status',
  templateUrl: './btn-status.component.html',
  styleUrls: ['./btn-status.component.css']
})
export class BtnStatusComponent implements OnInit {

  @Input() status;

  constructor() { }

  ngOnInit(): void {
  }

}
