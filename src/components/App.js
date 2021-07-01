import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { IntlProvider } from 'react-intl'
import { LOCALES } from '../i18n/locales'
import { messages } from '../i18n/messages'
import { useState } from 'react'

/* prop message accepts an object with a set of translated strings displaying on the page
   Проп message принимает объект с набором переведенных строк, отображаемых на странице.
   Значение этого пропа также будет динамически меняться в зависимости от текущей локации.

   prop locale determines in which language the app is rendered
   Проп locale, который принимает строку, определяет, на каком языке рендерится приложение.
   Мы будет динамически изменять значение этого пропа на основе выбора пользователем того или иного языка.

   Prop defaultLocale determines localization by default.
   Проп defaultLocale определяет локализацию по умолчанию и должен совпадать с
   "дефолтным" языком приложения.*/

const App = () => {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
    localStorage.setItem('locale', value)
  }

  function getInitialLocale () {
    //get saved data
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
      <div>
        <Header currentLocale={currentLocale} handleChange={handleChange}/>
        <Content/>
        <Footer/>
      </div>
    </IntlProvider>
  )
}

export default App
