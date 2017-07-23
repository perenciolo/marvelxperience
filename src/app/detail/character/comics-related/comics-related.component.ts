import { Component, OnInit, Input } from '@angular/core';

import { CharactersService } from '../../../shared/characters.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mx-comics-related',
  templateUrl: './comics-related.component.html',
  styleUrls: ['./comics-related.component.scss']
})
export class ComicsRelatedComponent implements OnInit {

  myData: Observable<any>;
  @Input() id;
  show = true;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this
      .charactersService
      .getFromMarvel(`/characters/${this.id}/comics`, 100, 0)
      .subscribe(res => {
        this.myData = res.data.results;
        this.showProgress();
      });
  }

  showProgress() {
    this.show = !this.show;
  }
}
