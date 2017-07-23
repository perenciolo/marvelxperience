import { Component, OnInit, Input } from '@angular/core';

import { CharactersService } from '../../../shared/characters.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mx-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {

  myData: Observable<any>;

  @Input() id;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getFromAPI();
  }

  getFromAPI() {
    this
      .charactersService
      .getFromMarvel(`/characters/${this.id}`, 100, 0)
      .subscribe(res => { this.myData = res.data.results; console.log(this.myData); });
  }
}
