import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cotacao } from '../Entity/Cotacao';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {
  private readonly API = 'http://localhost:8080/cotacao';
  constructor(private http: HttpClient) {}

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  listar() {
    return this.http.get<Cotacao[]>(this.API);
  }

  findById(id) {
    return this.http
      .get<Cotacao>(`${this.API}/find-by-id/${id}`)
      .pipe(take(1));
  }

  salvar(cotacao: Cotacao) {
    return this.http.post(this.API, cotacao).pipe(take(1));
  }

  editar(cotacao: Cotacao) {
    return this.http
      .put(this.API + `/${cotacao.id}`, cotacao, {
        headers: this.header,
      })
      .subscribe();
  }

  excluir(id) {
    return this.http.delete(`${this.API}/${id}`).subscribe();
  }




}
