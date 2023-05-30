import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductsFilter() {
    return `Yo soy un filter`;
  }

  @Get(':id')
  getProductId(@Param('id') id: string) {
    return { message: `Product ${id}` };
  }
}
