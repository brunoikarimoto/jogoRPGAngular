import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './Player';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  apiUrl = 'http://localhost:5000/Player';
  constructor(private http: HttpClient) {}
  listar(): Observable<Player[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Player[]>(url);
  }
  cadastrar(player: Player): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Player>(url, player, httpOptions);
  }
  atualizarAtributos(nome: string, player: Player): Observable<any> {
    const url = `${this.apiUrl}/atualizarAtributos/${nome}`;
    return this.http.patch<Player>(url, player, httpOptions);
  }
  excluir(nome: string): Observable<any> {
    const url = `${this.apiUrl}/deletar/${nome}`;
    return this.http.delete<Player>(url, httpOptions);
  }
}
