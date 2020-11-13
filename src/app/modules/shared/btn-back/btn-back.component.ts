import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-back',
  templateUrl: './btn-back.component.html',
  styleUrls: ['./btn-back.component.css']
})
export class BtnBackComponent implements OnInit {

  @Input() rota;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLink(){
    this.router.navigate([this.rota]);
  }

}
