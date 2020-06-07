import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent} from './services/services.component'
import { CourseDetailsComponent} from './course-details/course-details.component'
import { ActivitiesComponent} from './activities/activities.component'
import { GalleryComponent} from './gallery/gallery.component'
import { AboutUsComponent} from './about-us/about-us.component'


const routes: Routes = [
  {path: 'services' , component: ServicesComponent},
  {path: 'course-details' , component: CourseDetailsComponent},
  {path: 'activities' , component: ActivitiesComponent},
  {path: 'gallery' , component: GalleryComponent},
  {path: 'about-us' , component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
