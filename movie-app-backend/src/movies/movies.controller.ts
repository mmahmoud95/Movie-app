import { Controller, Get, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('search')
  async searchMovies(@Query('title') title: string) {
    if (!title) {
      return { error: 'Please provide a movie title' };
    }

    try {
      const movies = await this.moviesService.searchMovies(title);
      return movies;
    } catch (error) {
      return { error: 'Failed to fetch movies. Please try again later.' };
    }
  }
}
