import { Component, Type } from '@angular/core';
import { PrismJsDirective } from "./prismjs/prismjs.directive";
import { CodeblockComponent } from "./prismjs/codeblock.component";

@Component({
    selector: 'my-app',
    directives: [<Type>PrismJsDirective, <Type>CodeblockComponent],
    templateUrl: `app/app.component.html`
})
export class AppComponent {
    constructor() {}
}