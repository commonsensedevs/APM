//Create ProductListComponent class
import { Component } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    /**
     * The page title.
     */
    pageTitle = 'Product List';

    /**
     * The list of products.
     */
    //Inject ProductService into ProductListComponent
    constructor(private productService: ProductService) {
    }

    //Create products property
    products: IProduct[] | undefined;

    //Call getProducts() method in ngOnInit() lifecycle hook
    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

}