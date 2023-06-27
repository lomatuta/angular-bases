import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/components/counter.module';
import { AppComponent } from './app.component';
import { heroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
