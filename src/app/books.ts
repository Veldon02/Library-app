export interface Book{
    id: number;
    title: string;
    genre: string;
    cover: string;
    content: string;
    author: string;
    rating: number;
    reviewNumber: number;
}

export interface CreateBookRequest{
    id?: number;
    title: string;
    cover: string;
    content: string;
    genre: string;
    author: string;
}

export interface BookDetails{
    id: number;
    title: string;
    cover: string;
    content: string;
    author: string;
    genre: string;
    averageRating: number;
    reviews: Review[];
}

export interface Review{
    id: number;
    message: string;
    reviewer: string;
}