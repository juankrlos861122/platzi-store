import { Module } from '@nestjs/common';
import { ProductsController } from '../products/controllers/products.controller';
import { CategoriesController } from '../products/controllers/categories.controller';
import { ProductsService } from '../products/services/products.service';

@Module({
  controllers: [ProductsController, CategoriesController],
  providers: [ProductsService],
})
export class ProductsModule {}
