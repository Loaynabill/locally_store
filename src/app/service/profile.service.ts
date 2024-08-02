import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  idProfile:number=0;
  Deatiles:User={ id:0,
    userName:"",
    email:"string",
    password:"string",
    type:0,
    phone:""
}
  constructor(private api:SupabaseService) { }


}

