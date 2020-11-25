import { FC } from "react"
import {LinkBtn} from '../../ui';
import styles from './styles.module.scss';

const ProductCard: FC<any> = () => {

    return (
		<div className={styles.root}>
			<div className={styles.imageBlock}>
				<img src="/assets/catalog/product.svg" alt="Памятник" />
			</div>
			<div className={styles.description}>
				<span className={styles.type}>Горизонтальные</span>
				<p>Памятник V2</p>
				<div className={styles.actions}>
					<LinkBtn href="/" label="ВЫБРАТЬ ПАРАМЕТРЫ" />
					<img src="/assets/catalog/subtract.svg" alt="Избранное" />
				</div>
			</div>
		</div>
	);
};

export {ProductCard};