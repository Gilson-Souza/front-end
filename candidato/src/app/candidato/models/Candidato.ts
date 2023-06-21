export interface Candidatoo {
  id: number;
  nome: string;
  filiacao: {nomePai: string, nomeMae: string};
  endereco: {logradouro: string, cep: string, numero: string, cidade: {nome: string, estado:{nome: string, sigla: string}}};
  telefones: {numero: string, tipo: number} [];
  cursos: { nome: string } [];
}


