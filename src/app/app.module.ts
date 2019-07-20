import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {TileComponent} from './tile/tile.component';
import {UurbestuurService} from './api/uurbestuur.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UurbestuurService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
