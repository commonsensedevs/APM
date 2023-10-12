import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                id: 1,
                name: 'Product 1',
                code: 'P1',
                available: new Date('2021-01-01'),
                price: 100,
                rating: 4.5
            },
            {
                id: 2,
                name: 'Product 2',
                code: 'P2',
                available: new Date('2021-02-01'),
                price: 200,
                rating: 3.5
            },
            {
                id: 3,
                name: 'Product 3',
                code: 'P3',
                available: new Date('2021-03-01'),
                price: 300,
                rating: 4.0
            }
        ];
    }
}