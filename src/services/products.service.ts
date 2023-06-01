import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { Product } from '../entities/product.entities';
import { CreateProductDto, UpdateProductDto } from '../dto/products.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: '11',
      title: 'pasto',
      price: 55000,
      description: 'jardín botánico',
      images: 'https://picsum.photos/640/640?r=2530',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T15:37:10.000Z',
    },
    {
      id: '12',
      title: 'Modern Plastic Fish',
      price: 382,
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: 'https://picsum.photos/640/640?r=9753',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T15:14:00.000Z',
    },
    {
      id: '13',
      title: 'Change title',
      price: 386,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: 'https://picsum.photos/640/640?r=1089',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T14:28:32.000Z',
    },
    {
      id: '16',
      title: 'aaaa',
      price: 16000,
      description: 'Pescado fresco facil y para toda la familia',
      images: 'https://picsum.photos/640/640?r=6779',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T15:28:11.000Z',
    },
    {
      id: '17',
      title: 'Sleek Plastic Towels',
      price: 39,
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: 'https://picsum.photos/640/640?r=8693',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T00:14:31.000Z',
    },
    {
      id: '18',
      title: 'Change title',
      price: 100,
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: 'https://picsum.photos/640/640?r=2697',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T14:31:48.000Z',
    },
    {
      id: '20',
      title: 'Sleek Cotton Bacon',
      price: 889,
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: 'https://picsum.photos/640/640?r=8523',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T00:14:31.000Z',
    },
    {
      id: '21',
      title: 'Intelligent Soft Ball',
      price: 153,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: 'https://picsum.photos/640/640?r=7559',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T00:14:31.000Z',
    },
    {
      id: '22',
      title: 'Elegant Steel Chair',
      price: 574,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: 'https://picsum.photos/640/640?r=352',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T00:14:31.000Z',
    },
    {
      id: '23',
      title: 'Awesome Plastic Car',
      price: 612,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: 'https://picsum.photos/640/640?r=6570',
      creationAt: '2023-05-31T00:14:31.000Z',
      updatedAt: '2023-05-31T00:14:31.000Z',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: CreateProductDto) {
    const newProduct = {
      id: uuidv4(),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: string) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products.splice(index, 1);
      return this.products;
    } else {
      return 'product not found';
    }
  }
}
