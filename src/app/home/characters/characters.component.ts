import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../shared/characters.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mx-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  myData: Observable<any>;
  show = true;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this
      .charactersService
      .getFromMarvel()
      .subscribe(res => {
        this.myData = res.data.results;
        this.showProgress();
      });
  }

  showProgress() {
    this.show = !this.show;
  }
}
