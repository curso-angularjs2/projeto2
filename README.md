# Criar uma listagem simples utilizando o AngularJS

Nesse projeto você vai aprender como criar uma simples lista com o AngularJS, mas para isso é necessário que você tenha entendido bem o projeto anterior, caso não tenha entendido muito bem, volte para o projeto1.

Vamos lá, vamos utilizar a mesma estrutura do projeto1 por enquanto com os arquivos app.component.ts, app.module.ts e main.ts.

Vamos primeiro passar as configurações do projeto1 para o projeto2, ou seja. Os código ficarão da seguinte maneira:

* projeto2/package.json

~~~json
{
  "name": "projeto2",
  "version": "1.0.0",
  "scripts": {
    "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/angular/angular.io/blob/master/LICENSE"
    }
  ],
  "dependencies": {
    "@angular/common": "~2.2.0",
    "@angular/compiler": "~2.2.0",
    "@angular/core": "~2.2.0",
    "@angular/forms": "~2.2.0",
    "@angular/http": "~2.2.0",
    "@angular/platform-browser": "~2.2.0",
    "@angular/platform-browser-dynamic": "~2.2.0",
    "@angular/router": "~3.2.0",
    "@angular/upgrade": "~2.2.0",
    "angular-in-memory-web-api": "~0.1.15",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.39",
    "zone.js": "^0.6.25"
  },
  "devDependencies": {
    "@types/core-js": "^0.9.34",
    "@types/node": "^6.0.45",
    "concurrently": "^3.0.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.3"
  }
}

~~~

* projeto2/tsconfig.json

~~~json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}
~~~

* projeto2/systemjs.config.js

~~~javascript
//projeto2/systemjs.config.js
(function (global) {
  System.config({
    paths: {
      // Caminho das suas libs baixadas pelo npm
      'npm:': 'node_modules/'
    },
    // atributo onde carrega as libs necessárias
    map: {
      //pasta onde a aplicação funciona
      app: 'app',
      // angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // outras libs
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // pacotes necessários
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);

~~~

Dentro da sua pasta app estarão os arquivos app.component.ts, app.module.ts, main.ts da seguinte forma:

* projeto2/app/main.ts

~~~javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
~~~

* projeto2/app/app.component.ts

~~~javascript
import { Component } from '@angular/core';
@Component({
  selector: 'projeto2',
  template: '<h1>Listagem!</h1>'
})
export class AppComponent { }
~~~

* projeto2/app/app.module.ts

~~~javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
~~~

* projeto2/index.html

~~~html
<html>
  <head>
    <title>Projeto 2</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configuração -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>

  <body>
    <projeto2>Carregando...</projeto2>
  </body>
</html>

~~~

Não esqueça do npm install!

Pronto, agora que temos uma estrutura próxima a do projeto1 agora vamos criar a nossa listagem.
Mas para isso, primeiro vamos criar nossa class.
Utilize o código abaixo para criar sua classe de Usuario.

* projeto2/app/usuario.class.ts

~~~javascript
export class Usuario {
  id: number;
  nome: string;
  idade:number;
}
~~~

Agora vamos importar a nossa classe para o app.component.ts que ficará assim:


* projeto2/app/app.component.ts

~~~javascript
//Adicionar esse import no app.component.ts
import { Usuario } from './usuario.class';
~~~

Também coloque esse código no mesmo arquivo:

~~~javascript
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
~~~


Também é necessário colocar dentro do AppComponent o seguinte código:

~~~javascript
usuarios = USUARIOS;
~~~

Agora também coloque o seguinte html:

~~~javascript
template: `  <h2>Listagem de usuários</h2>
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
~~~

O app.component.ts ficará assim:

* projeto2/app/app.component.ts

~~~javascript
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
  template: `  <h2>Listagem de usuários</h2>
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

~~~

Agora é só executar o npm start e acessar o http://localhost:3000.

Pronto! Sua listagem está pronta!
