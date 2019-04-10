import {
  AfterViewInit,
  Component,
  ElementRef,
  Input, Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {
  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
  @Input('expanded') expanded;
  @Input('expandHeight') expandHeight;

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
  }

}
