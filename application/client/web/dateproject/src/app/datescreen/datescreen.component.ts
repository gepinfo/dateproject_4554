import { Component, OnInit, ViewChild } from '@angular/core';
import { DatescreenService } from './datescreen.service';





@Component({
  selector: 'app-datescreen',
  templateUrl: './datescreen.component.html',
  styleUrls: ['./datescreen.component.scss'],
})

export class DatescreenComponent implements OnInit {
    public datesentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        dates: '',
    }




    constructor (
        private datescreenService: DatescreenService,
    ) { }

    ngOnInit() {
        this.datesentity.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GpCreate() {
        this.datescreenService.GpCreate(this.datesentity).subscribe((data:any) => {
            this.datesentity.dates = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}