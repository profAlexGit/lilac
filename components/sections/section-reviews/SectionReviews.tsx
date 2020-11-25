import {FC, useEffect, useState} from 'react';
import {Slider} from './Slider';
import {LinkBtn} from '../../../ui';
import styles from './styles.module.scss';

const SectionReviews: FC = () => {
	
	const [reviews, setReviews] = useState<any>([]);

	const getReviews = async () => {
		return await fetch('https://lilac.gb-game.ru/reviews').then((data) => {
			return data.json();
		}).then(data => setReviews(data));
	};

	useEffect(() => {
		getReviews();
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles['header-text']}>
					<h2>Отзывы</h2>
				</div>

				<div className={styles['desktop-btn']}>
					<LinkBtn href="/" label="Оставить отзыв" />
				</div>
			</div>
			<Slider reviews={reviews}/>

			<div className={styles['mobile-btn']}>
				<LinkBtn href="/" label="Оставить отзыв" />
			</div>
		</div>
	);
};

export {SectionReviews};
