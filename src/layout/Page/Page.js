import { useCallback, useMemo } from 'react';
import i18n, { appLocales } from '../../i18n';
import PageView from './PageView';
import {
  Context as PageContext,
  data
} from '../../context/layout/Page';

export default function Page() {
  const { i18nConfig } = data;

  const changeLanguage = useCallback(() => {
    const nextLocaleIndex = appLocales.indexOf(i18n.language) + 1;
    const locale = nextLocaleIndex >= appLocales.length ? appLocales[0] : appLocales[nextLocaleIndex];
    i18n.changeLanguage(locale);
  }, []);

  const pageContextValue = useMemo(() => ({ changeLanguage, i18nConfig }), [i18nConfig, changeLanguage]);

  return (
    <PageContext.Provider value={pageContextValue}>
      <PageView />
    </PageContext.Provider>
  );
}
