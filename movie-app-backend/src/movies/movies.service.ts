import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  private readonly OMDB_API_URL =
    this.configService.get<string>('OMDB_API_URL');
  constructor(private configService: ConfigService) {}

  async searchMovies(title: string) {
    const apiKey = this.configService.get<string>('OMDB_API_KEY');
    const url = `${this.OMDB_API_URL}?s=${title}&apikey=${apiKey}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data from OMDb API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching data from OMDb: ${error.message}`);
    }
  }
}
