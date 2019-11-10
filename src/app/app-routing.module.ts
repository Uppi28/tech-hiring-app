import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UploadQnaComponent } from './upload-qna/upload-qna.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';

const appRoutes : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'uploadqna', component: UploadQnaComponent},
    {path: 'questions', component: QuestionsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}