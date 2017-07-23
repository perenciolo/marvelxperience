import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { CharactersService } from '../../../../shared/characters.service';

@Component({
  selector: 'mx-dialog-comics',
  templateUrl: './dialog-comics.component.html',
  styleUrls: ['./dialog-comics.component.scss']
})
export class DialogComicsComponent implements OnInit {

  myData: Observable<any>;
  id: string;

  show = true;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute, private router: Router) {
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
        console.log(this.myData);
        this.showProgress();
      });
  }

  getCharFromAPI(uri: string) {
    const id = uri.split('/')[6];
    this.router.navigate(['/character', id]);
  }

  showProgress() {
    this.show = !this.show;
  }

}
