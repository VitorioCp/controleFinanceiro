export interface Financias {
    sustento: number;
    estudoFinanceiro: number;
    investimentoLongoPrazo: number;
    lazer: number;
    reservaEmergencia: number;
  }
  
  export function financias(salario: number): Financias {
    const sustento = salario / 2;
    const estudoFinanceiro = salario / 10;
    const investimentoLongoPrazo = salario / 10;
    const lazer = salario / 10;
    const reservaEmergencia = (salario / 10) * 2;
  
    return {
      sustento,
      estudoFinanceiro,
      investimentoLongoPrazo,
      lazer,
      reservaEmergencia,
    };
  }