import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FavoriteService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post('')
  async addFavorite(
    @Body()
    body: {
      movieId: string;
      title: string;
      year: string;
      poster: string;
    },
  ) {
    const { movieId, title, year, poster } = body;

    return this.favoriteService.addMovieToFavorite(
      movieId,
      title,
      year,
      poster,
    );
  }

  @Get()
  async getFavorites() {
    return this.favoriteService.getMoviesFavorites();
  }

  @Delete(':movieId')
  async removeFavorite(@Param('movieId') movieId: string) {
    return this.favoriteService.removeMovieFromFavorites(movieId);
  }
}
