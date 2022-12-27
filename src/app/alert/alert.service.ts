import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alertPending: boolean = false;

  public courseCode: string = '';

  constructor() { }

}
