
declare type Product = {
    productId    : string     
    name         : string
    price        : number
    rating?       : number
    stockQuantity : number
}

declare type NewProduct = {
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
  }


declare type SalesSummary = {
salesSummaryId  : string
totalValue      : number
changePercentage? : number
date           :  string
}


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

declare type  expenseByCategory= {
expenseByCategoryId : string
category           : string
amount            :  string
date              :  string
}

declare type ExpenseByCategorySummary = {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
}

declare type User =  {
    userId: string;
    name: string;
    email: string;
  }
  