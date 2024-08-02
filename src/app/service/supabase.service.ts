import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocode } from '../models/promocode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductOrder } from '../models/product-order';
import { Review } from '../models/review';
import { FormOrder } from '../models/form-order';
import { CheckoutService } from './checkout.service';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  url: string = "https://ghymjzjckbsrbuwekvhe.supabase.co/rest/v1/"
  headererr = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set(
      'apikey',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoeW1qempja2JzcmJ1d2VrdmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4ODM2MzQsImV4cCI6MjAzNTQ1OTYzNH0.Ij4Gu4NF77a0KD1JIvWpN65V-a7Lk2-Gp5viNgCpGnY'
    );

  constructor(private httpClint: HttpClient) { }

  getAllPromocode(): Observable<Promocode[]> {
    return this.httpClint.get<Promocode[]>(`${this.url}promocode?select=*`, { headers: this.headererr })
  }

  getAllproductByGender(id: number): Observable<Product[]> {
    return this.httpClint.get<Product[]>(`${this.url}products?genderid=eq.${id}&select=*`, { headers: this.headererr })
  }

  getProductById(id: number): Observable<Product[]> {
    return this.httpClint.get<Product[]>(`${this.url}products?id=eq.${id}&select=*`, { headers: this.headererr })
  }

  deletProductById(id:number){
    return this.httpClint.delete(`${this.url}products?id=eq.${id}&select=*`, { headers: this.headererr })
  }

  updateOnProduct(prd: ProductOrder, quantityOfUser: number, size: string) {
    switch (size) {
      case "s":
        prd.product.amount.s -= quantityOfUser
        break;
      case "m":
        prd.product.amount.m -= quantityOfUser
        break;
      case "l":
        prd.product.amount.l -= quantityOfUser
        break;
      case "xl":
        prd.product.amount.xl -= quantityOfUser
        break;
    }
    return this.httpClint.patch<Product>(`${this.url}products?id=eq.${prd.product.id}`, prd.product, { headers: this.headererr })
  }

  postreview(review: Review, prdid: number, ratingg: number) {
    let rating:number[]=[]
for (let index = 0; index < ratingg; index++) {
  rating.push(index)
}
    review = { ...review, prdid, rating }
    return this.httpClint.post(`${this.url}review`, review, { headers: this.headererr })
  }
  getreview(prdid: number): Observable<Review[]> {
    return this.httpClint.get<Review[]>(`${this.url}review?prdid=eq.${prdid}&select=*`, { headers: this.headererr })
  }

  postOrder(order: any) {

    return this.httpClint.post(`${this.url}order`, order, { headers: this.headererr })
  }

  insertMessage(message: Message) {
    return this.httpClint.post(`${this.url}message`, message, { headers: this.headererr })
  }

  signUp(): Observable<User[]> {
    return this.httpClint.get<User[]>(`${this.url}users`, { headers: this.headererr });
  }

  addUser(user:User){
    return this.httpClint.post(`${this.url}users`,user, { headers: this.headererr })
  }

  getProfileDeatiles(id:number): Observable <User[]>{
    return this.httpClint.get<User[]>(`${this.url}users?id=eq.${id}`, { headers: this.headererr })
  }

  addproduct(prd:Product){
   return  this.httpClint.post(`${this.url}products`, prd, { headers: this.headererr })
  }

  updateprd(prd:Product){
    return this.httpClint.put(`${this.url}products?id=eq.${prd.id}`, prd, { headers: this.headererr })
  }
}

