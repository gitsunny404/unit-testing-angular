import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  locationURL : string = "https://masterdata.dev.jobcheck.in/masterdatabase/locations";

  getLocationService(){
    return this.http.get(this.locationURL);
  }

  
}
