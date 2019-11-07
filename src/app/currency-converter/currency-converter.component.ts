import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  public currData: any[];
  constructor( private apiService:ApiService ) { }

  ngOnInit() {
    this.apiService
            .getAll<any[]>()
            .subscribe((data: any[]) => this.currData = data,
            error => () => {
                console.log('error', 'Damn', 'Something went wrong...');
            },
            () => {
                console.log('success', 'Complete', 'Getting all values complete');
                
            });
  }

}
