import { Genre } from './media.interface';

export interface TVShow {
    id: string;
    title: string;
    description: string;
    genres: Genre[];
    episodes: Array<{
        episodeNumber: number;
        seasonNumber: number;
        releaseDate: Date;
        director: string;
        actors: string[];
    }>;
}
