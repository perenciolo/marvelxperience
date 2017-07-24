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
  finder: string;

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

  filterByTitle() {
    if (!this.myData || this.finder === undefined || this.finder.trim() === '') {
      return this.myData;
    }
    return this.myData.filter(d => d.name.toLowerCase().includes(this.finder.toLowerCase()));
  }

  showProgress() {
    this.show = !this.show;
  }
}
