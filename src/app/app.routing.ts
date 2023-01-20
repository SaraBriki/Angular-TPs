import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv-assets/cv/cv.component';
import { EditorComponent } from './editor/editor.component';
import { ColorSimulatorComponent } from './color-assets/color/simulator/color-simulator.component';
import { HomeComponent } from './home/home.component';
import { AddCvComponent } from './cv-assets/add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

const APP_ROUTING: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'resumes',
    children: [
      {
        path: '',
        component: CvComponent,
      },
      {
        path: 'add',
        component: AddCvComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'color',
    component: ColorSimulatorComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'slideshow',
    component: ObservableComponent,
  },
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
