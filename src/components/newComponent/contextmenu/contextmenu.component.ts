import {
  Component,
  Input,
  ViewEncapsulation,ViewContainerRef, ViewChild,EventEmitter,Output,
  OnInit
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Observable
} from 'rxjs/Rx';

@Component({
  templateUrl: 'src/components/newComponent/contextmenu/contextmenu.component.html',
  styleUrls: ['src/components/newComponent/contextmenu/contextmenu.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})


export class ContextMenuComponent implements OnInit {
  //@ViewChild('myKanbanboard') myKanbanboard: jqxKanbanComponent;
  
  @Input() top: number;
  @Input() left: number;
  @Output('destroyCheck') result: EventEmitter<any> = new EventEmitter(); 
  
  ngOnInit() {
    console.log('Component Menu Created!');
    console.log(this.top, this.left);
    const contextmenu = document.querySelector('.contextmenu-body');
  
  }
  
  cutBtnClicked() {
    console.log('cut button  clicked');
    this.result.emit();
    
  }

  copyBtnClicked() {
    console.log('copy button  clicked');
    this.result.emit();
  }

  pasteBtnClicked() {
    console.log('paste button  clicked');
    this.result.emit();
    
  }
}
