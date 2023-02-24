import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private loc : LocationService){}
  ngOnInit(): void {
    this.getLoc();
    
  }

  masterLocations : any;
  getLoc(){
    this.loc.getLocationService().subscribe(data =>{
      this.masterLocations = data;
      console.log(data);
    })
  }
  chooseLocation1 !: string ;
  chooseLocation2 !: string ;
  chooseLocation3 !: string ;

  masterLocationFiltered1 : string[] = [];
  masterLocationFiltered2 : string[] = [];

  choosenLocation(event: any){
    //console.log(this.masterLocations);
    console.log("Loc 1 ", this.chooseLocation1);
    for(let i=0 ; i< this.masterLocations.length;i++){
      if(this.chooseLocation1 !== this.masterLocations[i]){
        this.masterLocationFiltered1.push(this.masterLocations[i]);
      }
    }
    console.log("Loc 2 ", this.chooseLocation2);

    for(let i=0 ; i< this.masterLocationFiltered1.length;i++){
      if(this.chooseLocation2 !== this.masterLocationFiltered1[i] && this.chooseLocation1 !== this.masterLocations[i]){
        this.masterLocationFiltered2.push(this.masterLocationFiltered1[i]);
      }
    }

    
    console.log("Loc 3 ", this.chooseLocation3);
  }


  butDel(){
    const val = document.getElementById("delhiButton")?.innerText;
    console.log(val);
  }
  butKol(){
    const val = document.getElementById("kolButton")?.innerText;
    console.log(val);
  }
  
  

  
}



  












//   selectedValue = 0;
//   myVar : number = 0;

//   readSelectedValue() {
//     this.myVar = this.selectedValue;
//     console.log("UPDATED NUMBER : ", this.myVar);
//   }

// }
