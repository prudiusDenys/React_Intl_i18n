import { FormattedMessage } from 'react-intl'

/*FormattedMessage accepts prop id
which value must match with corresponding object's key from the file with translations  */

const Content = () => {
  return (
    <div className="container hero">
      <h1><FormattedMessage id={'learn_to'}/></h1>
      {/*<p>How $59.99 is displayed in your selected language</p>*/}
      <p><FormattedMessage id={'price_display'} values={{ n: 59.99 }}/></p>
      {/*<p>This is how 2,000 is formatted in the selected locale</p>*/}
      <p><FormattedMessage id={'number_display'} values={{ n: 2000 }}/></p>
      {/*<p>Start Today: {new Date().toLocaleDateString()}</p>*/}
      <p><FormattedMessage id={'start_today'} values={{ d: new Date() }}/></p>
    </div>
  )
}

export default Content
