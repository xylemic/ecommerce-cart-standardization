import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
  id : number
  title : string
  description : string
  price : number
  discountPercentage : number
  rating : number
  stock : number
  brand : string
  category : string
  thumbnail : string
  images : string[]
}

export interface ProductsResponse {
  products : Product[]
  total : number
  skip : number
  limit : number
}

export interface Category {
  id : string
  name : string
  image : string
  itemCount : number
}

export const productsApi = createApi({
  reducerPath : "productsApi",
  baseQuery : fetchBaseQuery({
    baseUrl : "https://dummyjson.com/",
    // add timeout and retry logic
    timeout : 10000,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json")
      headers.set("Content-Type", "application/json")
      return headers
    },
  }),
  endpoints : (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query : () => "products",
      // add retry logic
      extraOptions : {
        maxRetries : 3,
      },
    }),
    getProductById: builder.query<Product, number>({
      query : (id) => `products/${id}`,
      extraOptions : {
        maxRetries : 2,
      },
    }),
    getCategories : builder.query<string[], void>({
      query: () => "products/categories",
      extraOptions : {
        maxRetries : 2,
      },
    }),
    getProductsByCategory: builder.query<ProductsResponse, string>({
      query: (category) => `products/category/${category}`,
      extraOptions : {
        maxRetries : 2,
      },
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery } =
  productsApi 
