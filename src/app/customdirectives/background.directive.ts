import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class setBackground implements OnInit {

    // private element:ElementRef;   we can do this in alaternative way
    // private Renderer :Renderer2


    constructor( private element:ElementRef, private Renderer:Renderer2){   //angular will inject reference of the element where selector is used to the constructor using dependency injection ;    
                                                                            //here angular will create an instance of renderer class and it will inject it to the render

         
         
         //  this.Renderer=Renderer;
    // this.element = element
    }

    ngOnInit(): void {
    //    this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';
        // console.log(this.element);
        // console.log(this.element.nativeElement);



        this.Renderer.setStyle(this.element.nativeElement,'backgroundColor','#36454F')                          //FIRST PARAMETER IS ON WHICH ELEMENT  WE WANT TO ADD STYLES    //second is wht style we have to set in   //third argument is wht value to be given   // fourth param is optional param flex
        this.Renderer.setStyle(this.element.nativeElement,'color','white');
        this.Renderer.setAttribute(this.element.nativeElement,'title','this is an example title from renderer two');
    }
}
