import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


/** Angular Material Imports */
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

/** Application Components Imports */
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ServicesComponent } from './services/services.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

/** Angular JQWidgets Imports */
import { jqxScrollViewModule } from 'jqwidgets-ng/jqxscrollview';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    GalleryComponent,
    ActivitiesComponent,
    ServicesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,   
    jqxScrollViewModule, 
    jqxButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
