import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare function resize(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentwindow';

  users: any;
  constructor(private http: HttpClient) {
    this.user().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }

  user() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    resize();
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
