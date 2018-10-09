import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    
    <h3>You selected the current Id = {{departmentId}}</h3>
    
    <p>
      <button (click) = "showOverview()"> showOverview</button>
      <button (click) = "showContact()"> showContact</button>
    </p>
    <router-outlet></router-outlet>
    
    <p>
      <button (click) = "goPrevious()">Previous</button>
    
      <button (click) = "goNext()">Next</button>
    </p>
    
    <div>
      <button (click) = "gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));//get the current url Id not change on view part
    //this.departmentId = id;

    //to change the view curent url and over-view part use this
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId])   
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId])   
  }
  gotoDepartments(){
    //alert('gotoDepartments');
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}])
  }
  showOverview(){
    //alert('showContact');
    //{relativeTo: this.route}// show the current relative route
    this.router.navigate(['overview'], {relativeTo: this.route})

  }
  showContact(){
    //alert('showContact');
    this.router.navigate(['contact'],{relativeTo: this.route});

  }

}
