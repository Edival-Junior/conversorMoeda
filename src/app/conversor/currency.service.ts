import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moeda } from '../Entity/Moeda';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private readonly API = 'http://localhost:8080/currency';
  constructor(private http: HttpClient) {}

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  findAll(){
    return this.http.get(this.API);
  }

  findCurrencyValues(moedaSelecionada: Moeda) {
    return this.http.get(`${this.API}/findByCodigo/${moedaSelecionada.codigo}`);
  }

  converterMoedas(moedaSelecionada: Moeda, moedaConversao: Moeda, valor: number){
    return this.http.get(`${this.API}/converter/${moedaSelecionada.codigo}/${moedaConversao.codigo}/${valor}`);
  }
}
