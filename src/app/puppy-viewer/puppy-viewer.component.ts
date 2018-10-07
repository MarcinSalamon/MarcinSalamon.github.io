import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitten } from '../kitten';


@Component({
  selector: 'app-puppy-viewer',
  templateUrl: './puppy-viewer.component.html',
  styleUrls: ['./puppy-viewer.component.css']
})
export class PuppyViewerComponent implements OnInit {
  selected = 'Doggos';
  animals = ['Doggos', 'Kitties', 'Duckies'];
  puppy: any = {
    status: 'fail',
    message: 'https://i.pinimg.com/originals/7b/2f/2f/7b2f2f41abe8c7db22d7f6dae65d24da.jpg'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getFromAPI() {
    switch (this.selected) {
      case 'Doggos':
        this.getPuppy();
        break;
      case 'Kitties':
      this.getKitty();
      break;
      case 'Duckies':
      this.getDuck();
      break;
      default:
        break;
    }
  }

  getPuppy() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(pup => { this.puppy = pup; });
  }

  getKitty() {
    this.http.get<Kitten>('https://api.thecatapi.com/v1/images/search').subscribe(kit => {
       this.puppy.message = kit[0].url;});
  }

  getDuck() {
    this.http.get<Kitten>('https://random-d.uk/api/v1/random').subscribe(duck => {
       this.puppy.message = duck.url;});
  }
}
