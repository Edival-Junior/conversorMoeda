import { Cotacao } from './../Entity/Cotacao';
import { CotacaoService } from './cotacao.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit, AfterViewInit {

  constructor(
    private cotacaoService: CotacaoService,
    private router: Router
  ) { }

  cotacoes: Cotacao[];
  showForm: boolean;
  cotacao: Cotacao;
  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.cotacaoService.listar().subscribe(res => {
      this.cotacoes = res;
    });
  }

  verCotacoes():void {
    this.router.navigate(['/']);
  }

  editar(cotacao): void{
    this.showForm = true;
    this.cotacao = cotacao;
  }

  alterar(cotacao): void{
    this.cotacaoService.editar(cotacao);
    window.location.reload();
  }

  excluir(id): void{
    this.cotacaoService.excluir(id);
  }

  recalcular(){
    this.cotacao.valorTotal = (this.cotacao.valorUnidade * this.cotacao.quantidade);
  }

}
