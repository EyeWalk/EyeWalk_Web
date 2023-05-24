
export const currencyFormat = (number) => {
    return 'R$ ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
 }