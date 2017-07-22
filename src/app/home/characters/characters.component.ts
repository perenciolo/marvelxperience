import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../shared/characters.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mx-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  myData: Observable<any>;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this
      .charactersService
      .getFromMarvel()
      .subscribe(res => {
        this.myData = res.data.results;
        console.log(res.data);
      });
  }

}
