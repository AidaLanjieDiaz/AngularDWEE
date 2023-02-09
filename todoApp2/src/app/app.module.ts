import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Todo2Module } from "./todo2/todo2.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        Todo2Module
    ],
    providers: [],
    bootstrap: [AppComponent]
    
})
export class AppModule { }
