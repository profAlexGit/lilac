import {FC} from 'react';
import {Slider} from './Slider';
import {LinkBtn} from '../../../ui';
import styles from './styles.module.scss';

const SectionReviews: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles['header-text']}>
					<h2>Отзывы</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt.
					</p>
				</div>

				<div className={styles['desktop-btn']}>
					<LinkBtn href="/" label="Оставить отзыв" />
				</div>
			</div>
			<Slider />

			<div className={styles['mobile-btn']}>
				<LinkBtn href="/" label="Оставить отзыв" />
			</div>
		</div>
	);
};

export {SectionReviews};
