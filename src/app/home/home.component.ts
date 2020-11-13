import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proj-final-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exibirHomeComponent: boolean;
  exibirFilho1: boolean;
  exibirFilho2: boolean;
  exibirFilho3: boolean;
  textFilho1: string = '';

  constructor() { }

  ngOnInit(): void {
    this.exibirHomeComponent = true;
    this.exibirFilho1 = false;
    this.exibirFilho2 = false;
    this.exibirFilho3 = false;
  }

  clicarEExibirComponenteFilho1() {
    this.exibirHomeComponent = !this.exibirHomeComponent;
    this.exibirFilho1 = true;
    console.log(this.exibirFilho1);
  }

  voltar(evento) {
    this.exibirFilho1 = false;
    this.exibirHomeComponent = evento;
  }

}
