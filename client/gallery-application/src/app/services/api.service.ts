import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any='http://localhost:3000'
  constructor(
    public http:HttpClient 
  ) { }

  get(path)
  {
    return this.http.get(`${this.serverUrl}${path}`)
  }

  del(path){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${this.serverUrl}${path}`, {headers: new HttpHeaders({'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWVsYUBtYWlsLmNvbSIsInVzZXJuYW1lIjoibGFlbGFjdHIiLCJpYXQiOjE2MTk0OTQyMDZ9.rEBEICweJ0p_taRKk_KoA61SamPri7IWaNRb4G69S7s'})})
  }

  put(path, data){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.serverUrl}${path}`, data, {headers: new HttpHeaders({'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWVsYUBtYWlsLmNvbSIsInVzZXJuYW1lIjoibGFlbGFjdHIiLCJpYXQiOjE2MTk0OTQyMDZ9.rEBEICweJ0p_taRKk_KoA61SamPri7IWaNRb4G69S7s'})})
  }

  post(path, data){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(`${this.serverUrl}${path}`, data, {headers: new HttpHeaders({'access_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsYWVsYUBtYWlsLmNvbSIsInVzZXJuYW1lIjoibGFlbGFjdHIiLCJpYXQiOjE2MTk1MDgyODB9.lbQJUx-ce4Zu-K3NPhgWrj_ay__xU5ueWlTPmkpEfqs'})})
  }
}
