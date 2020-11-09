import { Controller, Param, Body, HttpCode, Get, Post } from '@nestjs/common';
import { attribute } from './models/attribute.model';
import { PostgresService } from './services/postgres.service';

@Controller('attributes')
export class AppController {
  constructor(private readonly postgresService: PostgresService) {}

    //Obtener todos los atributos
    @Get('')
    async getAllAttributes(): Promise<attribute[]>{
        return await this.postgresService.findAll();
    }

    //Obtener un atributo
    @Get(':attribute_id')
    async getAttribute(@Param() params): Promise<attribute>{
        return await this.postgresService.findOne(params.attribute_id);
    }

    //Crear un atributo
    @Post('create')
    @HttpCode(201)
    async postAttribute(@Body() attribute: attribute): Promise<attribute> {
        return await this.postgresService.create(attribute);
    }
}
