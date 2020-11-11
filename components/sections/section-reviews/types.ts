export interface IReviewCard {
    id: number;
    text: string;
    avatar: string;
    author: string;
    date: string;
};

export interface IReviewContent {
    review: IReviewCard;
}