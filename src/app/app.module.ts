import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BoardComponent} from './board/board.component';
import {TileComponent} from './tile/tile.component';
import {UurbestuurService} from './api/uurbestuur.service';
import {HttpClientModule} from '@angular/common/http';
import {UurbestuurTileComponent} from './tile/uurbestuur-tile/uurbestuur-tile.component';
import {WhatpulseService} from './api/whatpulse.service';
import {WhatpulseTileComponent} from './tile/whatpulse-tile/whatpulse-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent,
    UurbestuurTileComponent,
    WhatpulseTileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [UurbestuurService, WhatpulseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
