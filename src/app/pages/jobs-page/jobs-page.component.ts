import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent implements OnInit {
  selected = 'option2';
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sumbitForm() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogJobs, {
      width: '1140px',
      height: '800',
      // data: {name: this.name, animal: this.animal},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}

@Component({
  selector: 'dialog-recruit-page',
  templateUrl: 'dialog-jobs.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class DialogJobs {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogJobs>,){}


  openRecruit(): void {
    const dialogRef = this.dialog.open(DialogRecruitPage, {

      // data: {name: this.name, animal: this.animal},
    });
    this.dialogRef.close();


    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'dialog-recruit-page',
  templateUrl: 'dialog-recruit-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class DialogRecruitPage {

  files: any = []
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  success = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<DialogRecruitPage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveDialog() {
    this.dialogRef.close();
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
