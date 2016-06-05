import { Component, Type } from '@angular/core';
import { PrismJsDirective } from "./prismjs.directive";

@Component({
    selector: 'my-app',
    directives: [<Type>PrismJsDirective],
    templateUrl: `app/app.component.html`
})
export class AppComponent {
    constructor() {}
}