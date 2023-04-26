import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit, OnDestroy {

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  public formContact!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private contactSrv: ContactService,
    private element: ElementRef<HTMLElement>
  ) { }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this.initForm();
  }


  /**
   * Init form contact
   */
  public initForm = () =>{
    this.formContact = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.min(5)]],
      subject: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }


  /**
   * Submit data form
   */
  public submitFormContact = () =>{
    if(this.formContact.status === 'INVALID'){
      this.toastr.error('Tienes un problema en los campos!', 'Upss! ');
      return;
    }
    const btnSend = this.element.nativeElement.querySelector('#btnSend');
    btnSend?.setAttribute('disabled', 'true');
    const contact$ = this.contactSrv.sendEmailService(this.formContact.value).pipe(takeUntil(this._unsubscribeAll)).subscribe( resp =>{
      console.log(resp);
      this.toastr.success('Tu información se envío con éxito!', 'Good! ');
      btnSend?.removeAttribute('disabled')
    }, err =>{
      console.log(err);
      this.toastr.error('No se pudo enviar la información!', 'Upss! ');
      contact$.unsubscribe();
    })
  }

  
}
