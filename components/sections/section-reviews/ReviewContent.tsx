import { FC } from "react";
import styles from './styles.module.scss';

const ReviewContent: FC = () => {
    return (
		<div className={styles['review-content']}>
			<p className={styles['review-text']}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
				irure
			</p>
			<div className={styles['review-footer']}>
				<img src="\assets\sections\reviews\Avatar.jpg" alt="Аватар" />
				<div className={styles['review-author']}>
					<p>Павел Середкин</p>
					<span>12.08.2020</span>
				</div>
			</div>
		</div>
	);
}

export {ReviewContent};