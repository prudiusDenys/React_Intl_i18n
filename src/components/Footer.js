import { useState } from 'react'
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural, useIntl } from 'react-intl'

const Footer = () => {

  const [count, setCount] = useState(0)
  // we can use hook useIntl from React Intl API for formatting values or we can use components.
  // (Best practise is using components if it's possible)
  const intl = useIntl()

  const onChange = () => {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div className="container mt">

      {/* ----- CODE EXAMPLE -----*/}

      {/*<FormattedDate value={Date.now()} year={'numeric'} month={'long'} day={'2-digit'}/>*/}
      {/*<br/>*/}
      {/*<FormattedNumber value={2000} style={'currency'} currency={'USD'}/>*/}
      {/*<br/>*/}
      {/*/!* FormattedPlural allows to do a right translation from singular to plural form  *!/*/}
      {/*<FormattedPlural value={5} one={'1 click'} other={'5 clicks'}/>*/}
      {/*<br/>*/}
      {/*<input placeholder={intl.formatDate(Date.now(), { year: 'numeric', month: 'long', day: '2-digit' })}/>*/}

      {/* ---- END EXAMPLE ---- */}

      {/*<p>Please click the button below</p>*/}
      <p><FormattedMessage id={'click_button'}/></p>
      {/*<button onClick={onChange}>click here</button>*/}
      <button onClick={onChange}><FormattedMessage id={'click_here'}/></button>
      {/*<p>You clicked {count} times</p>*/}
      <p><FormattedMessage id={'click_count'} values={{ count }}/></p>
    </div>
  )
}

export default Footer

