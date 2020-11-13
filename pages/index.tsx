import {MainLayout} from '../components/mainLayout';
import {SectionHeader, SectionCounters, SectionServices, SectionReviews, SectionAbout, SectionFAQ, SectionFooter} from '../components/sections';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<MainLayout>
			<SectionHeader />
			<SectionCounters />
			<SectionServices />
			<SectionReviews />
			<SectionAbout />
			<SectionFAQ />
			<SectionFooter />
		</MainLayout>
	);
}
