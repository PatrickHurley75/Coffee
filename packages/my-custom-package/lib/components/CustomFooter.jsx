import React from 'react';
import { FormattedMessage } from 'react-intl';

const CustomFooter = props => {
  return (
     <div className="footer"><a href="http://app.coffeebreak.ie" target="_blank">Welcome to CoffeeBreak</a></div>
  )
}

CustomFooter.displayName = "Footer";

module.exports = CustomFooter;
