import { Cotacao } from './../Entity/Cotacao';
import { CurrencyService } from './currency.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Moeda } from '../Entity/Moeda';
import { CotacaoService } from '../cotacao/cotacao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit, AfterViewInit {
  constructor(
    private currencyService: CurrencyService,
    private cotacaoService: CotacaoService,
    private router: Router
  ) {}

  listaMoedas;
  moedaSelecionada: Moeda;
  moedaConversao: Moeda;
  quantia: number;
  quotes;
  exibirLista: boolean;
  visualizarConversao = false;
  displayedColumns: string[] = ['position'];
  valorConversao: number;
  valorConvertido: number;
  currencies;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.currencyService.findAll().subscribe((resp) => {
      this.listaMoedas = resp;
      console.log(this.listaMoedas);
    });
  }

  buscar(): void{
    this.currencyService
      .findCurrencyValues(this.moedaSelecionada)
      .subscribe((res) => {
        this.currencies = res;

        this.quotes = this.currencies.quotes;

        console.log(this.quotes);

        this.exibirLista = true;
      });
  }

  show() {
    this.visualizarConversao = true;
  }

  confirmarOcultar() {
    this.currencyService
      .converterMoedas(
        this.moedaSelecionada,
        this.moedaConversao,
        this.valorConversao
      )
      .subscribe((resp: any) => {
        this.valorConvertido = Number(resp.result);
        console.log(this.valorConvertido);
      });

    this.visualizarConversao = false;
  }

  salvar(): void{
    const cotacao: Cotacao = {
      moedaDe: this.moedaSelecionada,
      moedaPara: this.moedaConversao,
      valorTotal: this.valorConvertido,
      valorUnidade: this.valorConvertido / this.valorConversao,
      quantidade: this.valorConversao,
      data: new Date(),
    };
    this.cotacaoService.salvar(cotacao).subscribe();
  }

  cotacoesSalvas(): void{
    this.router.navigate(['/cotacoes']);
  }
}
