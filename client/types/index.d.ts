
declare type Product = {
    productId    : string     
    name         : string
    price        : number
    rating?       : number
    stockQuantity : number
}
declare type SalesSummary = {
salesSummaryId  : string
totalValue      : number
changePercentage? : number
date           :  string
};


declare type PurchaseSummary ={
purchaseSummaryId : string
totalPurchased  : number
changePercentage?  : number
date              : string
}

declare type ExpenseSummary ={
expenseSummaryId : string
totalExpenses    : number
date            :  string
}

declare type ExpenseByCategorySummary = {
expenseByCategoryId : string
category           : string
amount            :  number
date              :  string
}
