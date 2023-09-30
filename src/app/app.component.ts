import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dataSource=this.elementData
  }
  title="";

  user_name:any="";
  user_weight:any="";
  user_symbol:any="";

  isValid=false;
  dataSource:any
  imgUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
  displayedColumns: string[] = [ 'name', 'weight', 'symbol',"sa"];
  elementData: PeriodicElement[] = [
    {name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {name: 'Helium', weight: 4.0026, symbol: 'He'},
    {name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {name: 'Boron', weight: 10.811, symbol: 'B'},
    {name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    { name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
  onDelete(delname:any) {
    let index=0;
    
    for (let i = 0; i<this.elementData.length; i++) {
      let name = this.elementData[i].name;
      
      if (delname==name) {
        index=i;
        break;
      }

    }

    this.elementData.splice(index,1);
    this.dataSource = new MatTableDataSource<any>(this.elementData);

    // alert(name)
  }
  onEdit(edname:any) {
    for (let i = 0; i<this.elementData.length; i++) {
      let name = this.elementData[i].name;
      
      if (edname==name) {
        const index=i;
        break;
      }

    }
  }

  addData(){
    // this.elementData.push({ name: 'Hydrogen', weight: 1.0079, symbol: 'H'});
    this.elementData.push({name:this.user_name, weight:this.user_weight, symbol:this.user_symbol})
    this.dataSource = new MatTableDataSource<any>(this.elementData);

  }

  editData(){
    this.elementData.push({name:this.user_name, weight:this.user_weight, symbol:this.user_symbol})
    this.dataSource = new MatTableDataSource<any>(this.elementData);
  }

  
}


