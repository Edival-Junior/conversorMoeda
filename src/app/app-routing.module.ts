import { CotacaoComponent } from './cotacao/cotacao.component';
import { ConversorComponent } from './conversor/conversor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component: ConversorComponent,
  },
  {
    path : 'cotacoes',
    component: CotacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
