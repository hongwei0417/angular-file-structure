import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './shared/components/atoms/sample/sample.component';
import { SampleDirective } from './shared/directivces/sample.directive';
import { SamplePipe } from './shared/pipes/sample.pipe';

@NgModule({
  declarations: [AppComponent, SampleComponent, SampleDirective, SamplePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
