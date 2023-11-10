import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './components/definition/definition.component';
import { ArtComponent } from './components/art/art.component';
import { EconomyComponent } from './components/economy/economy.component';
import { ExponentsComponent } from './components/exponents/exponents.component';
import { GroupsComponent } from './components/groups/groups.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { NeoclasismComponent } from './components/neoclasism/neoclasism.component';
import { PoliticsComponent } from './components/politics/politics.component';

const routes: Routes = [
  { path: '', redirectTo: 'definition', pathMatch: 'full' },
  { path: 'definition', component: DefinitionComponent },
  { path: 'art', component: ArtComponent },
  { path: 'economy', component:EconomyComponent },
  { path: 'exponents', component:ExponentsComponent },
  { path: 'groups', component:GroupsComponent },
  { path: 'ideas', component:IdeasComponent },
  { path: 'literature', component:LiteratureComponent },
  { path: 'neoclasism', component:NeoclasismComponent },
  { path: 'politics', component:PoliticsComponent },
  { path: '**', redirectTo: 'definition', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
