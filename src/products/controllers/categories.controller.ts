import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return 'List Categories';
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return { message: `CategoryById: ${id}` };
  }

  @Get(':id/products/:productId')
  getCategory(@Param('id') id: number, @Param('productId') productId: number) {
    return { message: `Product ${productId} and ${id}` };
  }

  // Metodo para crear
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Action created',
      payload: payload,
    };
  }

  //Metodo Actualizar
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  //Metodo Eliminar
  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Action deleted',
      id,
    };
  }
}
