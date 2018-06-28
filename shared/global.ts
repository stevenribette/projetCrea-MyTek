import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()

export class globals {
    public userId:BehaviorSubject<Number> = new BehaviorSubject<Number>(null);
    setUserId(id){
        alert(id);
        this.userId.next(id);
    }
}