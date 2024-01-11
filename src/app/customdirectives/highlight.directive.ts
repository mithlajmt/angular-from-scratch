import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    constructor(private element:ElementRef, private Renderer:Renderer2){}
        
@HostListener('mouseenter') onMouseEnter(){
        // console.log('mouse entered');
        this.Renderer.addClass(this.element.nativeElement,'ekart--product--item1')  //firstpara is target second is wht 
        // console.log('its on');
        
    }

@HostListener('mouseleave') onMouseLeave(){
    this.Renderer.removeClass(this.element.nativeElement,'')
}

}