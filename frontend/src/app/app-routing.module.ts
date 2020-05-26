import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './admin/example/example.component';
import { DefaultComponent } from './admin/default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'admin-example', component: ExampleComponent },
  { path: 'admin-default', component: DefaultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
