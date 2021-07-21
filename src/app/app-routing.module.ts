import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { OnearticleComponent } from './components/onearticle/onearticle.component';

const routes: Routes = [
  {path: 'article',  component: ArticlesComponent},
  {path: 'book/view/:id',  component: OnearticleComponent},
  {path: '', pathMatch: 'full', redirectTo: 'article'},
  {path: '**',redirectTo: 'article'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
