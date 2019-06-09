import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { CoolComponent } from './cool/cool.component';

@NgModule({
  declarations: [LibraryComponent, CoolComponent],
  imports: [
  ],
  exports: [LibraryComponent, CoolComponent]
})
export class LibraryModule { }
