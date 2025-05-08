import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) { }

  getAllRecipes$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/recipes?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDk1YjBhMjYyZjNjZDFhYTgxYTE4ODkiLCJpYXQiOjE3NDY0NjkzNjAsImV4cCI6MTc0NjQ4Mzc2MH0.NfhwUeU8g_1FvR5VV2Q_hU_YYC_3EQ4NwiF67-yetpw`)
  }
}
