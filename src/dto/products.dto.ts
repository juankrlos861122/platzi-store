import { IsString, IsNumber, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProductDto {
  readonly id: string;

  readonly title: string;

  readonly price: number;

  readonly description: string;

  readonly images: string;

  readonly creationAt?: string;

  readonly updatedAt?: string;
}

export class UpdateProductDto {
  readonly title?: string;
  readonly price?: number;
  readonly description?: string;
  readonly images?: string;
  readonly creationAt?: string;
  readonly updatedAt: string;
}
