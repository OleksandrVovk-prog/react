import { useTranslation } from 'react-i18next';
import AboutView from './AboutView';

function About() {
  const { t } = useTranslation();
  return (
    <AboutView
      title={t('aboutPage')}
    />
  );
}

export default About;
