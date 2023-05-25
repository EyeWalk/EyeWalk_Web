
export const currencyFormat = (number) => {
    if (number)
        return 'R$ ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    else return 'R$ 0.00'
 }