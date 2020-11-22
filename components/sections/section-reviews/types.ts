export interface IReviewCard {
    _id: number;
    text: string;
    avatar: string;
    name: string;
    date: string;
};

export interface IReviewContent {
    review: IReviewCard;
}