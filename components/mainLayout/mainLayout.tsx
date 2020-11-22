import React, {FC} from 'react';
import Link from 'next/link';
import Avatar from '../avatar';
import styles from './styles.module.scss';

const navLinks = [
	{title: 'Исполнители', path: '/executors'},
	{title: 'Отзывы', path: '/reviews'},
	{title: 'FAQ', path: '/FAQ'},
];

const MainLayout: FC<any> = ({children}) => {
	return (
		<div className={styles.root}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<Link href={'/'}>
						<a>
							<img src={'/assets/logo.svg'} alt="Логотип" />
						</a>
					</Link>
				</div>
				<div className={styles.navigation}>
					{navLinks.map(({title, path}) => (
						<Link href={path} key={path}>
							<a>{title}</a>
						</Link>
					))}
				</div>
				<div className={styles.telephone}>
					<img src="/assets/telephone.svg" alt="telphone" />
					<span>+7 969 656 78 59</span>
				</div>
				<Avatar />
			</nav>
			<main>{children}</main>
		</div>
	);
};

export {MainLayout};
