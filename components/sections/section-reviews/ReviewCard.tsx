import {FC} from 'react';
import {ReviewContent} from './ReviewContent';
import styles from './styles.module.scss';
import {IReviewContent} from './types';

const ReviewCard: FC<IReviewContent> = ({review}) => {
	return (
		<div className={styles.reviewCard} id={review.id.toString()}>
			<div className={`${styles.quotes} ${styles['quotes-straight']}`}>
				<img src="\assets\sections\reviews\quotes.jpg" alt="" />
			</div>
			<ReviewContent {...review} />
			<div className={`${styles.quotes} ${styles['quotes-inverse']}`}>
				<img src="\assets\sections\reviews\quotes.jpg" alt="" />
			</div>
			{/* <img className={styles.quotes} src="\assets\sections\reviews\quotes.jpg" alt="" /> */}
			{/* <img className={`${styles.quotes} ${styles['quotes-inverse']}`} src="\assets\sections\reviews\quotes.jpg" alt="" /> */}
		</div>
	);
};

export {ReviewCard};
