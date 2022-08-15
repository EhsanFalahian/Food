import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../../app/assets/translations/en';

const resources = {
  en,
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .then()
  .catch();

export default i18n;
