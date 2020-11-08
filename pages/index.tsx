import {MainLayout} from '../components/mainLayout';
import {SectionHeader, SectionCounters, SectionServices} from '../components/sections';
import styles from './styles.module.scss';

export default function Home() {
	return (
		<MainLayout>
			<SectionHeader />
			<SectionCounters />
			<SectionServices />
		</MainLayout>
	);
}
