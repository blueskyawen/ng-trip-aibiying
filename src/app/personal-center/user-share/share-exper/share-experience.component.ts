import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-share-experience',
  templateUrl: './share-experience.component.html',
  styleUrls: ['./share-experience.component.less']
})
export class ShareExperienceComponent implements OnInit, AfterViewInit {
  showLoading: boolean = false;
  @ViewChild('experVideo')
  myVideoRef: ElementRef;
  @ViewChild('videoOper')
  myVideoOper: ElementRef;
  buttonTitle: string  =  '暂停';
  isPaused: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {this.showLoading = false;}, 2000);
  }

  ngAfterViewInit() {
    this.renderer.setProperty(this.myVideoRef.nativeElement, 'loop', true);
    this.renderer.listen(this.myVideoOper.nativeElement, 'click',  () => {
      this.pauseOrPlay();
    });
  }

  pauseOrPlay() {
    if (this.isPaused) {
      this.myVideoRef.nativeElement.play();
    } else {
      this.myVideoRef.nativeElement.pause();
    }
    this.isPaused = this.myVideoRef.nativeElement.paused;
    this.buttonTitle = this.isPaused ? '播放' : '暂停';
  }

}
