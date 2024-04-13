import { Genre } from 'src/module/media/interface/media.interface';

export interface User {
    id: string;
    username: string;
    preferences: {
        favoriteGenres: Genre[];
        dislikedGenres: Genre[];
    };
    watchHistory: Array<{
        contentId: string;
        watchedOn: Date;
        rating?: number;
    }>;
}
