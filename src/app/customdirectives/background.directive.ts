import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit {

    // private element:ElementRef;   we can do this in alaternative way

    constructor( private element:ElementRef){   //angular will inject reference of the element where selector is used to the constructor using dependency injection ;     
    // this.element = element
    }

    ngOnInit(): void {
       this.element.nativeElement.style.backgroundColor = '#36454F';
        this.element.nativeElement.style.color = 'white';
        // console.log(this.element);
        // console.log(this.element.nativeElement);
        
    }

}