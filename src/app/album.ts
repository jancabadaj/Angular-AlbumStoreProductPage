import { Track } from './track'

export interface Album {
    id: number;
    artist: string;
    album: AlbumInfo;
}

export interface AlbumInfo {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}
