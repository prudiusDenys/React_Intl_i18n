//messages.js contains relevant translations

/*
First element (n) — this is key, which is used for searching corresponding data.
Second element (type) — this is type of data for converting, which corresponding to a specific location.
Third argument (format) — this argument is optional — it allows define an additional information about value type
*/

import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    learn_to: `Hello, let's learn how to use React-Intl`,
    price_display:
      'How {n, number, ::currency/USD} is displayed in your selected language',
    number_display:
      'This is how {n, number} is formatted in the selected locale',
    start_today: 'Start Today: {d, date}',
    click_count: 'You clicked {count, plural, one {# time} other {# times}}',
    click_button: 'Please click the button below',
    click_here: 'click here',
    languages: 'Languages',
    // меню
    about_project: 'About the project',
    contact_us: 'Contact us',
  },
  [LOCALES.RUSSIAN]: {
    learn_to: 'Привет, научимся использовать React-Intl',
    price_display:
      'Как {n, number, ::currency/RUB} отображается на выбранном языке',
    number_display:
      'Вот как {n, number} форматируется на основе выбранной локации',
    start_today: 'Начни сегодня: {d, date}',
    click_count: 'Вы кликнули {count, plural, one {# раз} other {# раз(а)}}',
    click_button: 'Пожалуйста, нажмите на кнопку ниже',
    click_here: 'нажмите здесь',
    languages: 'Языки',
    // меню
    about_project: 'О проекте',
    contact_us: 'Свяжитесь с нами',
  },
  [LOCALES.FRENCH]: {
    learn_to: 'Bonjour, apprenons à utiliser React-Intl',
    price_display: `Comment {n, number, ::currency/USD} $ s'affiche dans la langue sélectionnée`,
    number_display:
      'Voici comment {n, number} sont formatés dans les paramètres régionaux sélectionnés ',
    start_today: `Commencez aujourd'hui: {d, date}`,
    click_count: 'Vous avez cliqué {count, plural, one {# fois} other {# fois}}',
    languages: 'Langues',
    // меню
    about_project: 'À propos du projet',
    contact_us: 'Contactez-nous',
    click_button: 'Veuillez cliquer sur le bouton ci-dessous',
    click_here: 'Cliquez ici',
  },
  [LOCALES.GERMAN]: {
    learn_to: 'Hallo, lass uns lernen, wie man React-Intl benutzt',
    price_display:
      'Wie {n, number, ::currency/USD} in Ihrer ausgewählten Sprache angezeigt wird',
    number_display:
      'Auf diese Weise werden {n, number} im ausgewählten Gebietsschema formatiert',
    start_today: 'Beginnen Sie heute: {d, date}',
    click_count: 'Sie haben {count, plural, one {# Mal} other {# Mal}} geklickt',
    languages: 'Sprachen',
    // меню
    about_project: 'Über das Projekt',
    contact_us: 'Kontaktiere uns',
    click_button: 'Bitte klicken Sie auf die Schaltfläche unten',
    click_here: 'Klicke hier',
  },
  [LOCALES.JAPANESE]: {
    learn_to: 'こんにちは、React-Intlの使い方を学びましょう',
    price_display:
      '選択した言語で{n, number, ::currency/USD}がどのように表示されるか',
    number_display:
      'これは、選択したロケールで{n, number}がフォーマットされる方法です。',
    start_today: '今日から始める：{d, date}',
    click_count: '{count, plural, one {# 回} other {# 回}}クリックしました',
    click_button: '下のボタンをクリックしてください',
    click_here: 'ここをクリック',
    languages: '言語',
    // меню
    about_project: 'プロジェクトについて',
    contact_us: 'お問い合わせ'
  }
}

// This file consists from default text app and translations for supported locations
