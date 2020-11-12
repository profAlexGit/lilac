import {FC} from 'react';
import styles from './styles.module.scss';

const SectionAbout: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.header}>
				<h2>Почему мы</h2>
				<p>
					Мы помогаем вам в поиске исполнителя для реализации вашего заказа, снижаем ваши
					риски потери времени и денег из-за неверного выбора исполнителя по причине
					отсутствия информации.
				</p>
			</div>

			<div className={styles.content}>
				<div className={styles.article}>
					<h5>header</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className={styles.article}>
					<h5>header</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
			</div>
		</section>
	);
};

export {SectionAbout};
