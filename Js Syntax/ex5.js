const extractCurrencyValue = (val) => Number(val.replace(/[a-zA-Z$€]+/, ''))

extractCurrencyValue('€120');

