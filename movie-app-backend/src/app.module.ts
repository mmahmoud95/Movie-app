import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { FavoriteService } from './favorites-movies/favorites.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

import { FavoritesController } from './favorites-movies/favorites.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MoviesController, FavoritesController],
  providers: [AppService, MoviesService, FavoriteService, PrismaService],
})
export class AppModule {}
