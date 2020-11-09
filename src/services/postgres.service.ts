import { Injectable } from '@nestjs/common';
import { attribute } from './../models/attribute.model'
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PostgresService {
    constructor(
        @InjectModel(attribute) private attributesModel: typeof attribute,
        ) {}

    //Obtener todos los atributos
    async findAll(): Promise<attribute[]> {
        const res = await this.attributesModel.findAll();
        return res as attribute[];
    }

    //Obtener un atributo
    findOne(attribute_id: string): Promise<attribute> {
        return this.attributesModel.findOne({
            where: {
                attribute_id,
            },
          });
    }

    //Crear un atributo
    async create(attributes: attribute) {
        return await this.attributesModel.create(attributes);
    }

    //Eliminar un atributo
    async remove(id: string): Promise<void> {
        const attrib = await this.findOne(id);
        await attrib.destroy();
    }
}