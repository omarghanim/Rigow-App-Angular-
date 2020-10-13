import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {APOLLO_OPTIONS} from 'apollo-angular'
import { HttpLinkModule,HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApollo } from '../graphql.module';




@NgModule({
  exports:[HttpLinkModule],
  providers:[{
    provide:APOLLO_OPTIONS,
    useFactory:createApollo,
    deps:[HttpLink]
  }]
})
export class GraphQLModule { }
