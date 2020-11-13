import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PeriodicElement } from './service/PeriodicElement';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'proj-final-filho2',
  templateUrl: './filho2.component.html',
  styleUrls: ['./filho2.component.css'],
})
export class Filho2Component implements OnInit {

  dadosTabela: PeriodicElement[] = [];
  cabecalhoColunas: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;
  @Input('exibirFilho2') exibirFilho2: boolean; 

  constructor() { }

  ngOnInit(): void {
    this.carregarTabela();
  }

  carregarTabela() {
    this.dadosTabela = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    this.dataSource = new MatTableDataSource(this.dadosTabela);
  }

  applyFilter(evento) {
    const filterValue = (evento.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
