import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount: number = 0;
  items = [];
  itemText: string = '';
  itemType: string = '';
  item;
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.itemCount = this.items.length;
  }

  addItem() {
    console.log(this.itemText);
    this.item = new Object();
    this.item.itemText = this.itemText;
    this.item.itemType = this.itemType;
    this.items.push(this.item);
    this.item = this.items.length;
    // this.items.push(this.itemTypethis.itemText);
    // this.itemText = '';
    // this.itemCount = this.items.length;
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
}
