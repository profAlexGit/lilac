import { FC } from "react";
import {LinkBtn} from '../../../ui'
import styles from './styles.module.scss';

const SectionServices: FC = () => {
    
    return (
		<div className={styles.root}>
			<div className={styles.main}>
				<h2>Памятники</h2>
				<p>
					Выбор памятника – это процесс с которому люди подходят обдуманно и скурпулёзно.
					В этом разделе Вы сделаете выбор, правильность которого будет доказана
					десятилетиями. Мы предложим Вам широкий выбор, исходя из желаемых типа, размеров
					и материала памятника.
				</p>
				<LinkBtn href="/" label="Выбрать" />
			</div>
			<img src="/assets/sections/services/monument.svg" alt="Изображение памятника" />
		</div>
	);
}

export {SectionServices};