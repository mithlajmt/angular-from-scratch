import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appHover]'
})
export class AppHoverDirective{
    constructor( private element:ElementRef ,private Renderer:Renderer2){}

    @HostBinding('style.backgroundColor') bg:string='#282828';
    @HostBinding('style.border') border:string='none';
    // @HostBinding('style.border') border:string='#282828 2px solid';
    @HostBinding('style.color') textColor:string='white'

    @HostListener('mouseenter') onMouseEnter(){
        this.bg='white';
        this.border='#282828 2x solid'
        this.textColor='#282828'        
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.bg='#282828';
        this.border='none'
        this.textColor='white'        
    }

    
}