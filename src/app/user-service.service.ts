import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) {
  }

  getList(): Observable<any> {
    return this.http.get('http://localhost:8081/user');
  }

  getById(): Observable<any> {
    let params1 = new HttpParams().set('id',"1"/*id*/);
    return this.http.get('http://localhost:8081/user/', {params: params1});
  }

  save(user): any {
    this.http.post('http://localhost:8081/user', user)
      .pipe().subscribe(data => console.log(data)
      , error => console.log(error)
    );
  }

  update(id, user) {
    this.http.post('http://localhost:8081/user/update/'+ id, user)
      .pipe().subscribe(data => console.log(data), error => console.log(error));
  }

  /*delete(id): Observable<any> {
    return this.http.delete('http://localhost:8081/user/', id);
  }*/
  /*delete(): Observable<any> {
    return this.http.delete('http://localhost:8081/user/3');
  }*/

  delete(id): Observable<any> {
    return this.http.post('http://localhost:8081/user/' + id, null);
  }
}
