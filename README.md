# Marvelxperience

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1. Angular Material version 2.0.0-beta.8. Angular Flex-Layout version 2.0.0-beta.8.

## Disclaimer
This is a fully responsive web app but, the module Angular Flex-Layout has some issues with safari integration because this browser miss some functionalities of flexbox when an element has fxLayout="column" on mobile devices as you can see [here](https://github.com/angular/flex-layout/issues/201) therefore for debugging this application in from extra smaller devices I recommend google chrome. As soon as the fix came out I will add it to the project.

## Configuration

Go to src/enviroments and add your keys to marvel api
`export const publicKey = ADD YOUR MARVEL PUBLIC KEY HERE;
export const privateKey = ADD YOUR MARVEL PRIVATE KEY HERE;`

make a dir in node_modules/md5 and add [this file named md5.ts](https://github.com/perenciolo/marvelxperience/blob/master/md5.ts)  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
