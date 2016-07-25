import {Component} from 'angular2/core';
import {Config} from "./config.service";
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  addVideoHeading:string = "Add Another Video";
  videos:Array<Video>;
  id:number = 2;

  constructor(){
    this.videos = [
      new Video(1, "Burn It Up", "I2q_PUENhd8", "The Warriors Dance Team performs to Janet Jackson's Burn It Up. April 27, 2016."),
      new Video(2, "Hypnotize", "kloTYLHclP8", "The Warriors Dance Team performs Hypnotize at the Finals Watch party, June 10, 2016.")
    ]
  }

  addVideo(title:string, code:string, desc:string) {
    this.id++;
    this.videos.push(new Video(this.id, title, code, desc));
    title = '';
    code = '';
    desc = '';
  }
}
