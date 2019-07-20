import {Component, OnInit} from '@angular/core';
import {UurbestuurService} from '../api/uurbestuur.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  hoursWorked = 0;

  constructor(private uurbestuurService: UurbestuurService) {
  }

  ngOnInit() {
    this.uurbestuurService.fetchData().subscribe((data: { work_days_all_count: number, work_hrs_this_month: number }) => {
      this.hoursWorked = data.work_hrs_this_month;
    });
  }

}
