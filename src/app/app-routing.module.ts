import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { UploadQnaComponent } from './upload-qna/upload-qna.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { TestviewComponent } from './testview/testview.component';
import { ResultsComponent } from './results/results.component';

const appRoutes : Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'uploadqna', component: UploadQnaComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: 'testview', component: TestviewComponent},
    {path: 'resultsView', component: ResultsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}