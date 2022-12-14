import { Component } from '@angular/core';
import {RecordsService} from "../../services/records.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent {
  isLoggedIn = localStorage.getItem('token') !== null;
  records: Array<{username: string, punctuation: number, ufos: number, disposedTime: number, recordDate: number}> = [];
  personalRecords: Array<{username: string, punctuation: number, ufos: number, disposedTime: number, recordDate: number}> = [];
constructor(public recordsService: RecordsService) {
    this.recordsService.generalRecords().subscribe(data => {
      data.map((record: {username: string, punctuation: number, ufos: number, disposedTime: number, recordDate: number}) => {
        this.records.push(record);
      });
    })

    if(this.isLoggedIn) {
      let username = localStorage.getItem('username') || "";
      this.recordsService.personalRecords(username).subscribe(data => {
        data.map((record: {username: string, punctuation: number, ufos: number, disposedTime: number, recordDate: number}) => {
          this.personalRecords.push(record);
        });
      })
    }
  }
}
