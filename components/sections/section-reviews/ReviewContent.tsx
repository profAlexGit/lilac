import {FC} from 'react';
import styles from './styles.module.scss';
import {IReviewCard} from './types';

const ReviewContent: FC<IReviewCard> = ({text, avatar, name, date}) => {
	return (
		<div className={styles['review-content']}>
			<p className={styles['review-text']}>
				{text}
			</p>
			<div className={styles['review-footer']}>
				<img src='/assets/sections/reviews/Avatar.jpg' alt="Аватар" />
				<div className={styles['review-author']}>
					<p>{name}</p>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
};

export {ReviewContent};
