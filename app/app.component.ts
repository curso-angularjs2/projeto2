import { Component } from '@angular/core';
import { Usuario } from './usuario.class';

const USUARIOS: Usuario[] = [
  { id: 11, nome: 'João', idade:20  },
  { id: 12, nome: 'Maria', idade:24 },
  { id: 13, nome: 'Joana', idade:29 },
  { id: 14, nome: 'José', idade:60  },
  { id: 15, nome: 'Magneta', idade:89 },
  { id: 16, nome: 'RubberMan', idade:21 },
  { id: 17, nome: 'Dynama' , idade:29 },
  { id: 18, nome: 'Dr IQ', idade:26 },
  { id: 19, nome: 'Nataniel', idade:25 },
  { id: 20, nome: 'Jéssica', idade:23 }
];

@Component({
  selector: 'projeto2',
  template: `
          <h2>Listagem de usuários</h2>
          <table class="table table-hover table-striped">
             <tr>
                <th>
                    Id
                </th>
                <th>
                    Nome
                </th>
                <th>
                    Idade
                </th>
             </tr>
             <tr *ngFor="let usuario of usuarios">
                <th>
                    {{usuario.id}}
                </th>
                <th>
                    {{usuario.nome}}
                </th>
                <th>
                    {{usuario.idade}}
                </th>
             </tr>
          </table>
  `
})
export class AppComponent {
  usuarios = USUARIOS;
}
