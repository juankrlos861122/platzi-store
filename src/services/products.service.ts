import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entities';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 3,
      title: 'Luxurious Concrete Fish',
      price: 797,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: [
        'https://picsum.photos/640/640?r=8837',
        'https://picsum.photos/640/640?r=7425',
        'https://picsum.photos/640/640?r=9101',
      ],
      creationAt: '2023-05-30T16:19:49.000Z',
      updatedAt: '2023-05-30T16:19:49.000Z',
      category: {
        id: 3,
        name: 'Nuevo nombre de pic',
        image: 'https://picsum.photos/640/640?r=5169',
        creationAt: '2023-05-30T16:19:49.000Z',
        updatedAt: '2023-05-30T21:35:26.000Z',
      },
    },
    {
      id: 5,
      title: 'Rustic Wooden Sausages',
      price: 883,
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: [
        'https://picsum.photos/640/640?r=9707',
        'https://picsum.photos/640/640?r=5132',
        'https://picsum.photos/640/640?r=7016',
      ],
      creationAt: '2023-05-30T16:19:49.000Z',
      updatedAt: '2023-05-30T16:19:49.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://picsum.photos/640/640?r=6681',
        creationAt: '2023-05-30T16:19:49.000Z',
        updatedAt: '2023-05-30T16:19:49.000Z',
      },
    },
    {
      id: 6,
      title: 'Elegant Concrete Bacon',
      price: 924,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: [
        'https://picsum.photos/640/640?r=4502',
        'https://picsum.photos/640/640?r=7525',
        'https://picsum.photos/640/640?r=5897',
      ],
      creationAt: '2023-05-30T16:19:49.000Z',
      updatedAt: '2023-05-30T16:19:49.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://picsum.photos/640/640?r=4977',
        creationAt: '2023-05-30T16:19:49.000Z',
        updatedAt: '2023-05-30T16:19:49.000Z',
      },
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
