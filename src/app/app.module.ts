import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatSelectModule, MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule } from "@angular/material";
import { UploadQnaComponent } from './upload-qna/upload-qna.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent, EditQuestionDialog } from './questions/questions.component';
import { TestviewComponent } from './testview/testview.component';
import { environment } from 'src/environments/environment';
import { Globals } from './shared/globals';
import { ResultsComponent, DisplayAnswersDialog } from './results/results.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadQnaComponent,
    HomeComponent,
    HeaderComponent,
    QuestionsComponent,
    EditQuestionDialog,
    DisplayAnswersDialog,
    TestviewComponent,
    ResultsComponent,
    LoaderComponent
  ],
  entryComponents:[
    EditQuestionDialog,
    DisplayAnswersDialog
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
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
