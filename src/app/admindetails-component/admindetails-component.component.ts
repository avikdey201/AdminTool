import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRequestModel } from '../../data-model/AdminRequestModel';
import { DataProviderService } from '.././services/data-provider.service';
import { AdminSubmitResponseModel } from '../../data-model/AdminSubmitResponseModel'
import { DialogData } from 'src/data-model/dialogData.model';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-admindetails-component',
  templateUrl: './admindetails-component.component.html',
  styleUrls: ['./admindetails-component.component.css']
})
export class AdmindetailsComponentComponent implements OnInit {

  adminForm: FormGroup;
  adminReqData: AdminRequestModel;
  isClicked: boolean;
  constructor(private router: Router,
    private fb: FormBuilder,
      private dataProviderService: DataProviderService,
      private dialogService: DialogService
     ) { }
    adminReq: AdminRequestModel = new AdminRequestModel();
    adminRes: AdminSubmitResponseModel = new AdminSubmitResponseModel();
  ngOnInit() {

    // if (this.localDataStore.getLocalDataStorage('token')) {
    //   // this.dataProviderService.getLoginDataWithDetails(this.loginReqData).subscribe(
    //   //   (data: LoginResponseModel) => {
    //   //      this.loginRes = data;
    //   //      this.loginDataStore.putLoginDataStorage(this.loginRes);
    //        console.log('Token received from backend', this.loginRes.userId);
    //        this.router.navigate(['/select']);
    //     //});
      
    // // }
    this.adminForm = this.fb.group({
      userName: [null, Validators.required],
      userEmailId: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      evaluatorName: [null, Validators.required],
      evaluatorEmailId: [null, [Validators.required, Validators.email]],
    });
  }

  submit(): void {
   this.adminReqData = new AdminRequestModel();
    this.adminReqData.userName = this.adminForm.controls.userName.value;
    this.adminReqData.userEmailId = this.adminForm.controls.userEmailId.value;
    this.adminReqData.password = this.adminForm.controls.password.value;
    this.adminReqData.evaluatorName = this.adminForm.controls.evaluatorName.value;
    this.adminReqData.evaluatorEmailId = this.adminForm.controls.evaluatorEmailId.value;
    this.dataProviderService.submitAdminDetails(this.adminReqData).subscribe(
          (data: AdminSubmitResponseModel) => {
         this.adminRes = data;
         console.log('Service Returned', this.adminRes.message);
         if (this.adminRes.message === 'User Data inserted properly') {
          const dialogData: DialogData = {dialogType: 'Success',
           dialogTitle: 'Success', dialogContent: 'Proper Data Submitted',
           dialogButtonTexts: ['Close']
          };
          this.dialogService.openDialog(dialogData);
          
  }
});
this.adminForm.reset();

}
}
