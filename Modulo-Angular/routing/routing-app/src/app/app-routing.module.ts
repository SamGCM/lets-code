import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentFirstComponent } from './component-first/component-first.component';
import { ComponentSecondComponent } from './component-second/component-second.component';
import { FifthComponent } from './fifth/fifth.component';
import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';


const routes: Routes = [
  {path: 'vendas-na-amazon', component: ComponentFirstComponent},
  {path: 'eletronicos', component: ComponentSecondComponent},
  {path: 'computadores', component: ThirdComponent},
  {path: 'atendimento', component: FourthComponent},
  {path: 'ideias', component: FifthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
