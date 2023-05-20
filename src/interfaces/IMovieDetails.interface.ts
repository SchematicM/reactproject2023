import {IGenre} from "./IGenre.interface";
import {ICollection} from "./ICollection.interface";
import {ICompany} from "./ICompany.interface";
import {ISpokenLanguage} from "./ISpokenLanguage.interface";

export interface IMovieDetailsInterface {
    "adult": boolean,
    "backdrop_path": string,
    "belongs_to_collection":ICollection|null,
    "budget": number,
    "genres": IGenre[],
    "homepage": string,
    "id": number,
    "imdb_id": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string|null,
    "production_companies": ICompany[],
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "spoken_languages": ISpokenLanguage[],
    "status": string,
    "tagline": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}