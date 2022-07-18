import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


export interface DialogData {
  animal: string;
  name: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {



  ngOnInit(): void {
  }



  files: any = []
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  success = false;
  matcher = new MyErrorStateMatcher();

  constructor(


  ) {
  }

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }



  saveDialog() {

  }

  onFileSelected(event: any) {
    const file = event.target.files;
    for (let i = 0; i < file.length; i++) {
      let dup = this.files.filter((j: any) => j.name === file[i].name);
      if (dup.length === 0) {
        this.files.push(file[i]);
      }

    }

    if (file) {
      const formData = new FormData();
      formData.append('thumbnail', file);
    }
  }

  handleFileDelete(f: any) {
    const deleteData = this.files.filter((i: any, idx: any) => idx !== f);
    this.files = deleteData;

  }

}
