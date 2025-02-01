import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}
  async addMovieToFavorite(
    movieId: string,
    title: string,
    year: string,
    poster: string,
  ): Promise<Movie> {
    const existingFavorite = await this.prisma.favorite.findUnique({
      where: { movieId: movieId },
    });
    if (existingFavorite) {
      throw new Error('movie already exists in favorites');
    }
    let movie = await this.prisma.movie.findUnique({
      where: { imdbID: movieId },
    });
    if (!movie) {
      movie = await this.prisma.movie.create({
        data: {
          imdbID: movieId,
          Title: title,
          Year: year,
          Poster: poster,
        },
      });
    }

    await this.prisma.favorite.create({
      data: {
        movie: {
          connect: { imdbID: movie.imdbID },
        },
      },
    });

    return movie;
  }

  async getMoviesFavorites(): Promise<Movie[]> {
    const favorites = await this.prisma.favorite.findMany({
      include: {
        movie: true,
      },
    });

    return favorites.map((favorite) => favorite.movie);
  }

  async removeMovieFromFavorites(movieId: string): Promise<void> {
    await this.prisma.favorite.delete({
      where: { movieId: movieId },
    });
  }
}
