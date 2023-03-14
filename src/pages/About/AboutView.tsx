import { useTranslation } from 'react-i18next';
import titleStyles from '../../styles/title.module.scss';

function AboutView(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className={titleStyles.pageTitle}>{ t('about.pageTitle') }</h1>
    </div>
  );
}

export default AboutView;
