import { Directive, ElementRef, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableproductDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }

  @Input() set disableProduct (disable:boolean){      //when we use a set keyword then we can use that property like a method so whatever value sent to here will be treated as value
    
    if(disable==true){
      this.render.addClass(this.element.nativeElement,'disable-out-of-stock')
    }


  }                                    



}
