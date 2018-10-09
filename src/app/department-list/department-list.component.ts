import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <style>
    h1 {
      color: purple;
    }
    </style>
    
    <h3>
      Department List!
    </h3>
    <ul class = "items">
      <li (click) = "onSelect(department)" [class.selected] = "isSelected(department)" *ngFor = "let department of departments">
      <span class="badge">{{department.id}}</span>----{{department.name}}
      </li>
    </ul>
  `,
  styles: [`
  .items li.selected {
     background-color: blue;
      color: green;
    }

  `]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  
  departments = [
    {"id" : '1', "name" : "zukar", "age" : "23"},
    {"id" : '2', "name" : "marlies", "age" : "33"},
    {"id" : '3', "name" : "stalon", "age" : "43"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }
  isSelected(department){
    return department.id === this.selectedId;
  }

}
