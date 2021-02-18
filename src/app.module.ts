import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from './movie/entities/movie.entity';
import { Movie1613618690665 } from './movie/migrations/1613618690665-Movie';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'docker',
      database: 'movie',
      entities: [Movie],
      synchronize: true,
      migrations: [Movie1613618690665],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
