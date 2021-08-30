let extractCurrencyValue = (val) => val.replace(/[a-zA-Z$€]+/, '')

extractCurrencyValue('€120');

