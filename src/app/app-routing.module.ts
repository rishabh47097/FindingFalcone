import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartupComponent } from './startup/startup.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';

const routes: Routes = [
  {path : '', component : StartupComponent},
  {path : 'main', component : MainComponent},
  {path : 'end', component : EndComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
