import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'proj-final-filho3',
  templateUrl: './filho3.component.html',
  styleUrls: ['./filho3.component.css']
})
export class Filho3Component implements OnInit {

  @Input('exibirFilho3') exibirFilho3:boolean = false;
  @Output('exibirHome') exibirHome = new EventEmitter();
  estacaoFavorita: string = '';
  estacoes = ['Outono', 'Primavera', 'Verão', 'Inverno'];


  constructor() { }

  ngOnInit(): void {
  }

  clicarVoltar(evento){
    this.exibirHome.emit(true);
    this.exibirFilho3 = false;
  }

}
