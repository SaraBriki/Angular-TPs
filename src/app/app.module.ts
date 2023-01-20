import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color-assets/color/color.component';
import { ChildComponent } from './color-assets/child/child.component';
import { ParentComponent } from './color-assets/parent/parent.component';
import { CvComponent } from './cv-assets/cv/cv.component';
import { CvListComponent } from './cv-assets/cv-list/list/cv-list.component';
import { CvListItemComponent } from './cv-assets/cv-list/list-item/cv-list-item.component';
import { CvDetailsComponent } from './cv-assets/cv/cv-details.component';
import { BusinessCardComponent } from './BusinessCard/business-card.component';
import { CardInputComponent } from './BusinessCard/card-input/card-input.component';
import { CardViewComponent } from './BusinessCard/card-view.component';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { HighlightDirective } from './directive/highlight.directive';
import { ColorInputComponent } from './color-assets/color/input/color-input.component';
import { DefaultImagePipe } from './cv-assets/default-image.pipe';
import { HiredCandidatesListComponent } from './cv-assets/cv-list/hired-candidates-list/hired-candidates-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ROUTING } from './app.routing';
import { EditorComponent } from './editor/editor.component';
import { HeaderComponent } from './header/header.component';
import { ColorSimulatorComponent } from './color-assets/color/simulator/color-simulator.component';
import { HomeComponent } from './home/home.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { AddCvComponent } from './cv-assets/add-cv/add-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    ChildComponent,
    ParentComponent,
    CvComponent,
    CvListComponent,
    CvListItemComponent,
    CvDetailsComponent,
    BusinessCardComponent,
    CardInputComponent,
    CardViewComponent,
    WordEditorComponent,
    HighlightDirective,
    ColorInputComponent,
    DefaultImagePipe,
    HiredCandidatesListComponent,
    EditorComponent,
    HeaderComponent,
    ColorSimulatorComponent,
    HomeComponent,
    RouterSimulatorComponent,
    AddCvComponent,
    LoginComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
