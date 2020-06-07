import { Component, ViewChild, ViewEncapsulation,OnInit } from '@angular/core';
import { jqxScrollViewComponent } from 'jqwidgets-ng/jqxscrollview';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

  @ViewChild('myScrollView', { static: false }) myScrollView: jqxScrollViewComponent;
    onStartClicked(): void {
        this.myScrollView.slideShow(true);
    };
    onStopClicked(): void {
        this.myScrollView.slideShow(false);
    };

  constructor() { }

  ngOnInit(): void {
  }

}
