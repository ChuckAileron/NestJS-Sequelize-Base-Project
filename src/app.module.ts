import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { attribute } from './models/attribute.model';
import { PostgresService } from './services/postgres.service'

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postevt',
      autoLoadModels: true,
      synchronize: false,
    }),
    SequelizeModule.forFeature([attribute]),
  ],
  controllers: [AppController],
  providers: [AppService, PostgresService],
})
export class AppModule {}