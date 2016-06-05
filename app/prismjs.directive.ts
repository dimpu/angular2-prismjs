import {Directive, ViewContainerRef, AfterViewInit } from "@angular/core";
import * as Prism from "Prism";

@Directive({
    selector: "[prismjs]"
})
export class PrismJsDirective implements AfterViewInit {

    constructor(public viewContainer: ViewContainerRef) {}

    ngAfterViewInit():any {

        const html = this.viewContainer.element.nativeElement.innerText;
        this.viewContainer.element.nativeElement.innerHTML = Prism.highlight(html, Prism.languages.typescript);
    }

}