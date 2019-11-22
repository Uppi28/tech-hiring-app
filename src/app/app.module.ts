import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatRadioModule, MatButtonModule, MatCardModule, MatSelectModule, MatDialogModule, MatIconModule } from "@angular/material";
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

@NgModule({
  declarations: [
    AppComponent,
    UploadQnaComponent,
    HomeComponent,
    HeaderComponent,
    QuestionsComponent,
    EditQuestionDialog,
    TestviewComponent
  ],
  entryComponents:[
    EditQuestionDialog
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
