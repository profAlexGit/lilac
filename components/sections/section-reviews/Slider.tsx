import {FC, useEffect, useState} from 'react';
import {ReviewCard} from './ReviewCard';
import useWindowWidth from '../../../utils/useWindowSize';
import styles from './styles.module.scss';

const data = [
	{
		id: 1,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 2,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 3,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 4,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 5,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 6,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 7,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
	{
		id: 8,
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
		avatar: '/assets/sections/reviews/Avatar.jpg',
		author: 'Павел Середкин',
		date: '12.08.2020',
	},
];

const getElemOnPage = (width: number) => {
	if (width > 1350) {
		return 4;
	}

	if (width > 1050) {
		return 3;
	}

	if (width > 754) {
		return 2;
	}

	return 1;
};

const Slider: FC = () => {
	const width = useWindowWidth();

	let elemOnPage = getElemOnPage(width);

	const pages = Math.ceil(data.length / elemOnPage);
	const [currentPage, setCurrentPage] = useState(0);

	const indicators = [];

	for (let i = 0; i < pages; i++) {
		indicators.push(
			<div
				key={i}
				className={`${styles.indicator} ${
					i === currentPage ? styles['indicator-active'] : ''
				}`}
			></div>
		);
	}

	const activeSliderData =
		currentPage * elemOnPage + elemOnPage < data.length
			? data.slice(currentPage * elemOnPage, currentPage * elemOnPage + elemOnPage)
			: data.slice(currentPage * elemOnPage);
	console.log(activeSliderData);

	return (
		<div className={styles.slider}>
			<div
				className={`${styles['slider-content']} ${
					activeSliderData.length < elemOnPage ? styles.lastPage : ''
				}`}
			>
				{activeSliderData.map((data) => {
					return <ReviewCard key={data.id} review={data} />;
				})}
			</div>
			<div className={styles.controls}>
				<button
					className={styles.arrowBtn}
					disabled={currentPage === 0}
					onClick={() => {
						setCurrentPage(currentPage - 1);
					}}
				>
					<img src="\assets\sections\reviews\left_arrow.svg" alt="left arrow" />
				</button>
				<div className={styles.indicators}>{indicators.map((indicator) => indicator)}</div>
				<button
					className={styles.arrowBtn}
					disabled={currentPage === pages - 1}
					onClick={() => {
						setCurrentPage(currentPage + 1);
					}}
				>
					<img src="\assets\sections\reviews\right_arrow.svg" alt="left arrow" />
				</button>
			</div>
		</div>
	);
};

export {Slider};
