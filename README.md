# Web

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Criar uma nova página

Seguindo os conceitos do Lazy Loading, para criar uma nova página devemos:

- Rodar a criação de um novo módulo com rota dentro da pasta modules
Ex: ng g m modules/nome-do-modulo --routing

- Criar o componente dentro da nova pasta
Ex: ng g c modules/nome-do-modulo

- Adicionar a rota principal dentro do app-routing
Ex: {
    path: 'novo-modulo',
    loadChildren: () => import('./modules/novo-modulo/novo-modulo.module').then(m => m.NovoModuloModule)
  }

## Criar um componente reutilizavel

- Criar o componente dentro da pasta modules/shared
Ex: ng g c modules/shared/nome-component

- Incluir dentro do shared.module.ts o componente no exports:[]