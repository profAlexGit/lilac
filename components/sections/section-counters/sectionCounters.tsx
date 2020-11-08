import {FC} from 'react';
import {CounterCard} from './counterCard';
import styles from './styles.module.scss';

const dataCounters = [
	{
		count: '250+',
		img: '/assets/sections/counters/sales.svg',
		text: 'Куплено',
	},
	{
		count: '47+',
		img: '/assets/sections/counters/regions.svg',
		text: 'Регионов',
	},
	{
		count: '61+',
		img: '/assets/sections/counters/executors.svg',
		text: 'Исполнитель',
	},
	{
		count: '15%',
		img: '/assets/sections/counters/economics.svg',
		text: 'Экономия',
	},
];

const SectionCounters: FC = () => {
	return (
		<div className={styles.root}>
			{dataCounters.map((counter, index) => {
				return <CounterCard key={index} {...counter} />;
			})}
			{/* <CounterCard />
			<CounterCard />
			<CounterCard />
			<CounterCard /> */}
		</div>
	);
};

export {SectionCounters};
