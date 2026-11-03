import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn:"root"
})

export class CartService {
    cart = signal<string[]>([])
    addToCart(product:string){
        this.cart.update(items=>[...items,product])
    }
    getCartCount(){
        return this.cart().length;
    }
}