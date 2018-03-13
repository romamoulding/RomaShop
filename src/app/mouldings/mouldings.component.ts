import { Component, OnInit } from '@angular/core';
import { Moulding } from '../moulding';
import {MouldingService} from '../moulding.service';

@Component({
  selector: 'app-mouldings',
  templateUrl: './mouldings.component.html',
  styleUrls: ['./mouldings.component.css']
})
export class MouldingsComponent implements OnInit {


  //moulding array assignment
  mouldings: Moulding[];
  
  //Constructor auto-initialize mouldingService
  constructor(private mouldingService: MouldingService) { }
  
  //Get and subscribe moulding observable
  getMouldings(): void {
    this.mouldingService.getMouldings().subscribe(mouldings=>this.mouldings=mouldings);
  }

  

  ngOnInit() {

    //Get mouldings on Component init.
    this.getMouldings();
  }

}
