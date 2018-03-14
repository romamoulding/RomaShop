import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Moulding } from '../moulding';
import { MouldingService } from '../moulding.service';


@Component({
  selector: 'app-moulding-filters',
  templateUrl: './moulding-filters.component.html',
  styleUrls: ['./moulding-filters.component.css']
})

export class MouldingFiltersComponent implements OnInit {

  mouldings$: Observable<Moulding[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private mouldingService: MouldingService) {}
  
  // Push a search term into the observable stream.
  search(term: string): void {
  this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
  this.mouldings$ = this.searchTerms.pipe(
  // wait 300ms after each keystroke before considering the term
  debounceTime(300),
  
  // ignore new term if same as previous term
  distinctUntilChanged(),
  
  // switch to new search observable each time the term changes
  switchMap((term: string) => this.mouldingService.searchMouldings(term)),
  );
  }

}
