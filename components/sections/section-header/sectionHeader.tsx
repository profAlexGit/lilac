import {FC} from 'react';
import {LinkBtn} from '../../../ui';
import styles from './styles.module.scss';

const SectionHeader: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.main}>
				<h1>
					Выбери <span className="strongText">лучшего</span> изготовителя памятников
				</h1>
				<p>
					Поможем найти изготовителя памятника с оптимальными
					условиями:&nbsp;цена-качество-сроки
				</p>
				<LinkBtn href="/" label="Выбрать" />
			</div>
		</section>
	);
};

export {SectionHeader};
