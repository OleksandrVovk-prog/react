import { useTranslation } from 'react-i18next';

/**
 * About page view
 */
function AboutView(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div>
      <p>{ t('about.pageTitle') }</p>
    </div>
  );
}

export default AboutView;
