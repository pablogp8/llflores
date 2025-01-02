import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { schedule, match } from '../../../shared/models/schedule.model';
import { GeneralDataService } from '../../../shared/service/generalData.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  private scheduleService = inject(GeneralDataService);
  schedule: match[] = [];
  season: schedule[] = [];

  ngOnInit(){
    //this.getSchedule();
    this.getSeason();
  }

  getSchedule(){
    this.schedule = [];
    this.scheduleService.getSchedule().subscribe({
      next: (data)=> {
        const tmpSch = data.find(item=> item.bdid ===1);
        if(tmpSch !== undefined){
          this.schedule = tmpSch.juegos;
        }
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

  getSeason(){
    this.season = [];
    this.scheduleService.getSchedule().subscribe({
      next: (data)=> {
        this.season = data;        
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }
}
