import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Moments } from '../Moments';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter <Moments> ()
  @Input() btnText!: string

  momentForm!: FormGroup



  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required],),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }
  
  submit() {
    
    if (this.momentForm.invalid) {
      return
    }
    
    
    console.log(this.momentForm.value)

    this.onSubmit.emit(this.momentForm.value)
  }

  get title() {
    return this.momentForm.get('title')!
  }

  get description() {
    return this.momentForm.get('description')!
  }

  get image() {
    return this.momentForm.get('image')!
  }

  onFileSelected (event: any) {
    const file : File = event.target.files[0]

    this.momentForm.patchValue({ image: file })
  }
}
