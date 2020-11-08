import { FC } from "react";
import {ReviewCard} from './ReviewCard';
import styles from './styles.module.scss';

const SectionReviews: FC = () => {
    
    return (
        <div className={styles.root}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    )
}

export {SectionReviews};