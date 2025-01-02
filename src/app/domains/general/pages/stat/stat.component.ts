import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralDataService } from '../../../shared/service/generalData.service';
import { listTop, topG } from '../../../shared/models/top.model';
@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.css'
})
export class StatComponent {
  private topService = inject(GeneralDataService);
  topMVP: topG[] = [];
  topsL: listTop[] = [];

  ngOnInit(){
    //this.getTop();
    this.getListTops();
  }

  getTop(){
    this.topMVP = [];
    this.topService.getListTops().subscribe({
      next: (data)=> {
        const tmpTop = data.find(item=> item.bdid === 3);
        if(tmpTop !== undefined){
          this.topMVP = tmpTop.lista;
          console.log(tmpTop);
        }
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

  getListTops(){
    this.topsL = [];
    this.topService.getListTops().subscribe({
      next: (data)=> {
        this.topsL = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
