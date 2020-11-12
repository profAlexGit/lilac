import {FC} from 'react';
import styles from './styles.module.scss';
import { ITabContentId, ITabContentItem } from './types';

const aboutWork: ITabContentItem[] = [
	{
		num: 1,
		question: 'Оформление заявки',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
	{
		num: 2,
		question: 'Выбор исполнителя',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
	{
		num: 3,
		question: 'Заключение договора',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
];

const primary: ITabContentItem[] = [
	{
		num: 1,
		question: 'Вопрос 1',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis',
	},
	{
		num: 2,
		question: 'Вопрос 2',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie',
	},
	{
		num: 3,
		question: 'Вопрос 3',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida.',
	},
];
const payment: ITabContentItem[] = [
	{
		num: 1,
		question: 'Pay 1',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
	{
		num: 2,
		question: 'Pay 2',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
	{
		num: 3,
		question: 'Pay 3',
		answer:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, viverra et faucibus vitae et morbi. Quisque in ac arcu euismod. Adipiscing eget nibh lectus mattis sed feugiat id lorem sit. Sed integer faucibus vivamus gravida. Est molestie placerat lacus vel morbi nulla tempor. Libero, ipsum lectus et velit pellentesque adipiscing dui.',
	},
];

const data = [aboutWork, primary, payment];

const TabContent: FC<ITabContentId> = ({id, display}) => {
	const renderTabContent = ({num, question, answer}: ITabContentItem, key: number) => {
		return (
			<div key={key} className={styles.tabItem}>
				<div className={styles['tabItem-question']}>
					<span className={styles.questionNumber}>{num}</span>
					<span className={styles.questionText}>{question}</span>
				</div>

				<p className={styles.questionAnswer}>{answer}</p>
			</div>
		);
	};

	return <div className={`${styles.content} ${display ? styles.tabContentDisplay : ''}`}>
        {data[id].map((content, index) => {
            return renderTabContent(content, index)
        })}
        </div>;
};

export {TabContent}
