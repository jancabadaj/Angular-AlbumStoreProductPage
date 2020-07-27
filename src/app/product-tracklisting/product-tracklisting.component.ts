import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductService } from '../product.service'
import { Album } from '../album'

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id')
    this._productService.getAlbum(id).subscribe(response => this.albumInfo = response)
  }

}
