import { FC, useState } from "react";
import styles from './styles.module.scss';
import { TabContent } from "./TabContent";

const SectionFAQ: FC = () => {

    const [activeTab, setActiveTab] = useState(0);

    const changeTabHandler = (id: number) => {
        setActiveTab(id);
    };

    return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h2>Вопросы</h2>
				<div className={styles.tabs}>
					<div
						className={`${styles.tab} ${activeTab === 0 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(0)}
					>
						Как мы работаем
					</div>

					<TabContent id={activeTab} display={activeTab === 0 ? true : false} />

					<div
						className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(1)}
					>
						Основные
					</div>
					<TabContent id={activeTab} display={activeTab === 1 ? true : false} />
					<div
						className={`${styles.tab} ${activeTab === 2 ? styles.activeTab : ''}`}
						onClick={() => changeTabHandler(2)}
					>
						Оплата
					</div>
					<TabContent id={activeTab} display={activeTab === 2 ? true : false} />
				</div>
			</div>
			<TabContent id={activeTab} />
		</div>
	);
}

export {SectionFAQ};