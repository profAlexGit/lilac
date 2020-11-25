import {FC} from 'react';
import {MainLayout} from '../../components/mainLayout';
import ProductCard from '../../components/ProductCard';
import styles from '../styles.module.scss';
import catalogStyle from './styles.module.scss';

const Catalog: FC = () => {
	return (
		<MainLayout navColor="white">
			<div className={styles.container}>
				<div className={catalogStyle.productsBlock}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</MainLayout>
	);
};

export default Catalog;
