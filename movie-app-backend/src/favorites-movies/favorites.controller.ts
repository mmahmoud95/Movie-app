// import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
// import { FavoriteService } from './favorites.service';

// @Controller('favorites')
// export class FavoritesController {
//   constructor(private readonly favoriteService: FavoriteService) {}

//   @Post('add')
//   async addFavorite(
//     @Body('userId') userId: string,
//     @Body('movieId') movieId: number,
//   ) {
//     return this.favoriteService.addFavorite(userId, movieId);
//   }

//   @Get(':userId')
//   async getFavorites(@Param('userId') userId: string) {
//     return this.favoriteService.getFavorites(userId);
//   }

//   @Delete('remove/:userId/:movieId')
//   async removeFavorite(
//     @Param('userId') userId: string,
//     @Param('movieId') movieId: number,
//   ) {
//     return this.favoriteService.removeFavorite(userId, movieId);
//   }
// }
