import { Moeda } from './Moeda';

export class Cotacao {
  id?: number;
  moedaDe: Moeda;
  moedaPara: Moeda;
  valorUnidade: number;
  valorTotal: number;
  quantidade: number;
  data: Date;
}
