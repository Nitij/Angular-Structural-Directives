import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSetBorder]'
})
export class SetBorderDirective {

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

    @Input() set appSetBorder(width: number){
      let view = this.viewContainer.createEmbeddedView(this.template);
      view.rootNodes[0].style.borderStyle = "solid";
      view.rootNodes[0].style.borderColor = "black";
      view.rootNodes[0].style.borerWidth = width;
    
  }

}
