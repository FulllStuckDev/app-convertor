import React from 'react'
import { Block } from './Block'

export const Blocks = ({
    fromPrice,
    fromCurrency, 
    setFromCurrency, 
    onChangeFromPrice,
    toPrice,
    toCurrency,
    setToCurrency,
    onChangeToPrice
    }) => (
    <div className="Blocks">
        <Block 
        value={fromPrice}
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeFromPrice} 
      />
      <Block 
        value={toPrice}
        currency={toCurrency} 
        onChangeCurrency={setToCurrency} 
        onChangeValue={onChangeToPrice} 
      />
    </div>
)