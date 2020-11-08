import {FC} from 'react';
import {ReviewContent} from './ReviewContent';
import styles from './styles.module.scss';

const ReviewCard: FC = () => {
	return (
		<div className={styles.reviewCard}>
			<div className={`${styles.quotes} ${styles['quotes-straight']}`}>
				<img src="\assets\sections\reviews\quotes.jpg" alt="" />
			</div>
                <ReviewContent />
			<div className={`${styles.quotes} ${styles['quotes-inverse']}`}>
				<img src="\assets\sections\reviews\quotes.jpg" alt="" />
			</div>
			{/* <img className={styles.quotes} src="\assets\sections\reviews\quotes.jpg" alt="" /> */}
			{/* <img className={`${styles.quotes} ${styles['quotes-inverse']}`} src="\assets\sections\reviews\quotes.jpg" alt="" /> */}
		</div>
	);
};

export {ReviewCard};
