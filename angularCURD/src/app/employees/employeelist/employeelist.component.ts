import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor( 
    private employeeService : EmployeeService,
    private toastr : ToastrService ) { }

  
  ngOnInit() {
    this.employeeService.getEmployeeList();
  }

  showForEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);;
    console.log(this.employeeService.selectedEmployee);
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(id)
      .subscribe(x => {
        this.employeeService.getEmployeeList();
        this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }
}