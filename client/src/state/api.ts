import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface DashboardMetrics {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary:  ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api= createApi({
    baseQuery: fetchBaseQuery({baseUrl : process.env.NEXT_PUBLIC_API_URL}),
    reducerPath: 'api',
    tagTypes: ["DashboardMetrics"],
    endpoints: (build) => {
        return ({
            getDashboardMetrics: build.query<DashboardMetrics, void>({
                query: () => "/dashboard",
                providesTags: ["DashboardMetrics"],
              }),
        })
    }
})



export const {useGetDashboardMetricsQuery} = api