import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatSelectModule } from "@angular/material";
import { UploadQnaComponent } from './upload-qna/upload-qna.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { UiTestComponent } from './ui-test/ui-test.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent } from './questions/questions.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'uitest', component: UiTestComponent},
  {path: 'questions', component: UploadQnaComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UploadQnaComponent,
    HomeComponent,
    UiTestComponent,
    HeaderComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
