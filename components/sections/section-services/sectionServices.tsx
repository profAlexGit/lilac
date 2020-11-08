import { FC } from "react";
import {LinkBtn} from '../../../ui'
import styles from './styles.module.scss';

const SectionServices: FC = () => {
    
    return (
		<div className={styles.root}>
			<div className={styles.main}>
				<h2>Памятники</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugia.
				</p>
				<LinkBtn href="/" label="Выбрать" />
			</div>
            <img src="/assets/sections/services/monument.svg" alt="Изображение памятника"/>
		</div>
	);
}

export {SectionServices};