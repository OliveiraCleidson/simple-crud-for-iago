import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = this.movieRepository.create(createMovieDto);

    const savedMovie = await this.movieRepository.save(movie);

    return savedMovie;
  }

  async findAll() {
    const movies = await this.movieRepository.find();

    return movies;
  }

  async findOne(id: number) {
    const movie = await this.movieRepository.findOne(id);

    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.movieRepository.findOne(id);

    if (!movie) return;

    Object.assign(movie, updateMovieDto);

    await this.movieRepository.save(movie);

    return movie;
  }

  async remove(id: number) {
    await this.movieRepository.delete(id);
  }
}
