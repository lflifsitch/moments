import { Component, importProvidersFrom, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Moments } from '../../Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-moments-new',
  templateUrl: './moments-new.component.html',
  styleUrls: ['./moments-new.component.css']
})
export class MomentsNewComponent implements OnInit {

  btnText = "Compartilhar!"
  constructor(private momentService: MomentsService,
     private messageService: MessagesService,
     private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moments) {
    const formData = new FormData()

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if (moment.image) {
      formData.append('image', moment.image)
    }


    await this.momentService.createMoment(formData).subscribe()

    this.messageService.add(`Momento adicionado com sucesso!`)

    this.router.navigate([''])




  }
}
