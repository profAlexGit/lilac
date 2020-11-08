import { FC } from "react";
import {ICounterCardProps} from './types';
import styles from './styles.module.scss';

const CounterCard: FC<ICounterCardProps> = ({count, img, text}) => {
	return (
		<div className={styles.counterCard}>
			<span className={styles.count}>{count}</span>
			<div className={styles.iconCount}>
				<img src={img} alt="" />
				<span className={styles.iconText}>{text}</span>
			</div>
		</div>
	);
};

export {CounterCard};