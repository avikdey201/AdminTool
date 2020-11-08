import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdminSubmitResponseModel } from '../../data-model/AdminSubmitResponseModel';
import { AdminRequestModel } from '../../data-model/AdminRequestModel';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }
  adminSubmit_endpoint = environment.baseUrls.local_dev + environment.api_endpoints.submitAdminDetails;

  public submitAdminDetails(adminObj: AdminRequestModel): Observable<any> {
    console.log(this.adminSubmit_endpoint);
    //const descriptionData = '../assets/Mock-Data/DescriptionResponse.json';
    return this.http.post(this.adminSubmit_endpoint, adminObj);
    //return this.http.get<LoginResponseModel>(descriptionData);  
  }
}
