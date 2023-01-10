import { Component, OnInit } from '@angular/core';
import { MomentsService } from 'src/app/services/moments.service';
import { environment } from 'src/environments/environment';
import { Moments } from '../../Moments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moments[] = []
  moments: Moments[] = []
  baseApiUrl = environment.baseApiUrl



  constructor(private momentService: MomentsService) { }

  ngOnInit(): void {
    this.momentService.getMoment().subscribe((items) => {
      const data = items.data

      data.map((item) => {
        item.created_at = new Date(items.created_at!).toLocaleDateString('pt-BR')

      })

      this.allMoments = data
      this.moments = data


    })

  }

}
