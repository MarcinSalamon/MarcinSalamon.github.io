import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-puppy-viewer',
  templateUrl: './puppy-viewer.component.html',
  styleUrls: ['./puppy-viewer.component.css']
})
export class PuppyViewerComponent implements OnInit {
  puppy: any = {
    status: 'fail',
    message: 'https://i.pinimg.com/originals/7b/2f/2f/7b2f2f41abe8c7db22d7f6dae65d24da.jpg'
  };
  kitty: any = {
    url: ''
  };
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPuppy() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe(pup => { this.puppy = pup; });
  }

  getKitty() {
    console.log('kitty');
    this.http.get('https://api.thecatapi.com/v1/images/search').subscribe(kit => this.kitty = kit);
  }
}
