import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'proj-final-filho1',
  templateUrl: './filho1.component.html',
  styleUrls: ['./filho1.component.css']
})
export class Filho1Component implements OnInit {

  @Input('exibirFilho1') exibirFilho1: boolean;
  @Input('textFilho1') textFilho1: string = '';
  @Output('exibirHome') exibirHome = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clicarVoltar(evento) {
    this.exibirHome.emit(true);
    this.exibirFilho1 = false;
  }

}
