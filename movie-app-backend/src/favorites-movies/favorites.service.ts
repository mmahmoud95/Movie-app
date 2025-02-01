import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie } from '@prisma/client';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async addFavorite(movieId: string): Promise<Movie> {
    const existingFavorite = await this.prisma.favorite.findUnique({
      where: { movieId: movieId },
    });

    if (existingFavorite) {
      throw new Error('الفيلم موجود بالفعل في المفضلة');
    }

    const movie = await this.prisma.movie.upsert({
      where: { imdbID: movieId },
      update: {},
      create: {
        imdbID: movieId,
        Title: 'عنوان الفيلم',
        Year: 'سنة الفيلم',
        Poster: 'رابط الصورة',
      },
    });

    await this.prisma.favorite.create({
      data: {
        movieId: movie.id.toString(),
      },
    });

    return movie;
  }

  async getFavorites(): Promise<Movie[]> {
    const favorites = await this.prisma.favorite.findMany({
      include: {
        movie: {
          select: {
            id: true,
            imdbID: true,
            Title: true,
            Year: true,
            Poster: true,
          },
        },
      },
    });

    // استخراج الأفلام فقط من المفضلة
    return favorites.map((favorite) => favorite.movie);
  }

  // إزالة فيلم من المفضلة
  async removeFavorite(movieId: string): Promise<void> {
    await this.prisma.favorite.delete({
      where: { movieId: movieId }, // هنا نبحث عن المفضل باستخدام movieId
    });
  }
}
