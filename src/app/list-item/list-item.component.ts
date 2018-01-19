import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { IlistItem } from './list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: IlistItem;
  itemType: string;
  itemText: string;

  Task = false;
  Event = false;
  Task_Complete = false;
  Note = false;
  Inspiration = false;
  Explore = false;
  closeResult: string;

  ngOnInit() {
    this.itemType = this.item.itemType;
    this.itemText = this.item.itemText;
    this.Task = this.itemType === 'Task';
    this.Event = this.itemType === 'Event';
    this.Task_Complete = this.itemType === 'Event-Complete';
    this.Note = this.itemType === 'Note';
    this.Inspiration = this.itemType === 'Inspiration';
    this.Explore = this.itemType === 'Explore';
  }
  open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  constructor(private modalService: NgbModal) {}

}
