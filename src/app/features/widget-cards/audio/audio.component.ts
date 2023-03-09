import { Component, Input, OnInit } from '@angular/core';

interface Audio {
  name: string;
  total: number;
  value: number;
}

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  @Input() audioData: Audio;

  constructor() { }

  ngOnInit(): void {
    console.log(this.audioData);
  }

}
