import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { MainPageComponent } from './main-page/main-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { SearchPipe } from './search.pipe';
import { PortPipe } from './port.pipe';
import { TypePipe } from './type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardPageComponent,
    SearchPipe,
    PortPipe,
    TypePipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'https://api.spacex.land/graphql/',
        }),
      };
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
