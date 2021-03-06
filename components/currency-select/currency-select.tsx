import React from "react";
import { Currency, currencyLabel } from "../../interfaces/currency.interface";
import css from './currency-select.module.scss'

interface IProps {
  value: Currency;
  onChange: (updatedCurrency: Currency) => void;
  excludedCurrencies?: Currency[];
}

export const CurrencySelect: React.FC<IProps> = ({ value, onChange, excludedCurrencies = [] }) => {
  const handleChange = e => {
    e.preventDefault()
    onChange(e.target.value)
  }
  const currenciesToChoose = Object.keys(Currency).filter((currency: Currency) => !excludedCurrencies.includes(currency)) as Currency[]
  return <div>
    <select className={css.Select} onChange={handleChange} value={value}>
      {currenciesToChoose.map((currency, i) => <option key={i} value={currency}>{currencyLabel[currency] ?? currency.toUpperCase()}</option>)}
    </select>
  </div>
}
