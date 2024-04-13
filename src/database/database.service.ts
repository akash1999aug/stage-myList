import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MoviesEntity } from 'src/module/media/entity/movies.entity';
import { TvShowsEntity } from 'src/module/media/entity/tvShows.entity';
import { UserEntity } from 'src/module/user/entity/user.entity';

const seedMovie = [
    {
        title: 'Movie A',
        description: 'Movie A Description',
        releaseDate: 1713032799,
        director: 'Movie A Director',
    },
    {
        title: 'Movie B',
        description: 'Movie B Description',
        releaseDate: 1713032799,
        director: 'Movie B Director',
    },
    {
        title: 'Movie C',
        description: 'Movie C Description',
        releaseDate: 1713032799,
        director: 'Movie C Director',
    },
    {
        title: 'Movie D',
        description: 'Movie D Description',
        releaseDate: 1713032799,
        director: 'Movie D Director',
    },
    {
        title: 'Movie E',
        description: 'Movie E Description',
        releaseDate: 1713032799,
        director: 'Movie E Director',
    },
    {
        title: 'Movie F',
        description: 'Movie F Description',
        releaseDate: 1713032799,
        director: 'Movie F Director',
    },
];

const seedTvShows = [
    {
        title: 'Tv Show A',
        description: 'Tv Show A Description',
        director: 'Tv Show A Director',
    },
    {
        title: 'Tv Show B',
        description: 'Tv Show B Description',
        director: 'Tv Show B Director',
    },
    {
        title: 'Tv Show C',
        description: 'Tv Show C Description',
        director: 'Tv Show C Director',
    },
    {
        title: 'Tv Show D',
        description: 'Tv Show D Description',
        director: 'Tv Show D Director',
    },
    {
        title: 'Tv Show E',
        description: 'Tv Show E Description',
        director: 'Tv Show E Director',
    },
    {
        title: 'Tv Show F',
        description: 'Tv Show F Description',
        director: 'Tv Show F Director',
    },
];

@Injectable()
export class DatabaseService {
    constructor(private configService: ConfigService) {}

    async seedingData() {
        const users = await UserEntity.findOne();

        if (!users) {
            await UserEntity.create({ userName: 'testUser' });
        }

        const movies = await MoviesEntity.findOne();

        if (!movies) {
            await MoviesEntity.bulkCreate(seedMovie);
        }

        const tvShows = await TvShowsEntity.findOne();

        if (!tvShows) {
            await TvShowsEntity.bulkCreate(seedTvShows);
        }
    }
}
