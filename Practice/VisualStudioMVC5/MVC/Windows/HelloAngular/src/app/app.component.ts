import { Component, ElementRef} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(private elementRef: ElementRef) {

        console.log(elementRef.nativeElement.getAttribute("myAttribute"));
    }

    title = "Pre Sale POC";
}