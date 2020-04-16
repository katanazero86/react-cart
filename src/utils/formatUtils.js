
// 천단위 ,
export const currencyFormat = (targetPriceString) => {
    return targetPriceString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

