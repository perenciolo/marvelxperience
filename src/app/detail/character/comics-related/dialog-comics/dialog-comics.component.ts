import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { CharactersService } from '../../../../shared/characters.service';

@Component({
  selector: 'mx-dialog-comics',
  templateUrl: './dialog-comics.component.html',
  styleUrls: ['./dialog-comics.component.css']
})
export class DialogComicsComponent implements OnInit {

  myData: Observable<any>;
  id: string;

  show = true;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this
      .charactersService
      .getFromMarvel(`/comics/${this.id}`, 100, 0)
      .subscribe(res => {
        this.myData = res.data.results;
        this.showProgress();
      });
  }

  showProgress() {
    this.show = !this.show;
  }

}
