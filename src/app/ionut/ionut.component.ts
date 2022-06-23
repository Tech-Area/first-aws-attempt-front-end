import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-ionut',
  templateUrl: './ionut.component.html',
  styleUrls: ['./ionut.component.css']
})
export class IonutComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  addPerson(name: any, age: any, cnp: any) {
    const person = {
      "name": name,
      "age": age,
      "cnp": cnp
    };
    console.log(name, age, cnp);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post("http://firstawsattempt-env.eba-vsmqvemc.eu-west-3.elasticbeanstalk.com/", JSON.stringify(person), {headers: headers}).subscribe(data => console.log(data));
  }

  delete() {
    this.http.delete("http://firstawsattempt-env.eba-vsmqvemc.eu-west-3.elasticbeanstalk.com/delete").subscribe(data => {
      console.log(data)
    })
  }
}
