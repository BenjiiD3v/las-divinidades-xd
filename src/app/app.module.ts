import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtComponent } from './components/art/art.component';
import { DefinitionComponent } from './components/definition/definition.component';
import { EconomyComponent } from './components/economy/economy.component';
import { ExponentsComponent } from './components/exponents/exponents.component';
import { FooterComponent } from './components/footer/footer.component';
import { GroupsComponent } from './components/groups/groups.component';
import { IdeasComponent } from './components/ideas/ideas.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { NeoclasismComponent } from './components/neoclasism/neoclasism.component';
import { PoliticsComponent } from './components/politics/politics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtComponent,
    DefinitionComponent,
    EconomyComponent,
    ExponentsComponent,
    FooterComponent,
    GroupsComponent,
    IdeasComponent,
    LiteratureComponent,
    NeoclasismComponent,
    PoliticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
