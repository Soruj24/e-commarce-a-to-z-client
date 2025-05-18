import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    _id: string;
}

interface PaginationParams {
    page?: number;
    limit?: number;
    search?: string;
    sort?: string;
    order?: 'asc' | 'desc';
}

interface ProductsResponse {
    payload: {
        products: Product[];
        totalProducts: number;
        pagination: {
            totalPage: number;
            currentPage: number;
            previousPage: number | null;
            nextPage: number | null;
        };
    };
}

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        getProducts: build.query<ProductsResponse, PaginationParams>({
            query: ({ page = 1, limit = 10, search = '', sort = 'createdAt', order = 'asc' }) => ({
                url: 'product',
                params: {
                    page,
                    limit,
                    search,
                    sort,
                    order
                }
            }),
            providesTags: (result) =>
                result?.payload?.products
                    ? [
                        ...result.payload.products.map(({ _id }) => ({ type: 'Product', id: _id } as const)),
                        { type: 'Product', id: 'LIST' },
                    ]
                    : [{ type: 'Product', id: 'LIST' }],
            transformResponse: (response: ProductsResponse) => {
                return {
                    payload: {
                        ...response.payload,
                        products: response.payload.products || []
                    }
                };
            }
        }),

        getProduct: build.query<Product, string>({
            query: (id) => `product/${id}`,
            providesTags: (_, __, id) => [{ type: 'Product', id }],
            transformResponse: (response: { payload: { product: Product } }) => response.payload.product
        }),

        addProduct: build.mutation<Product, Partial<Product>>({
            query: (body) => ({
                url: 'product',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Product', id: 'LIST' }],
            transformResponse: (response: { payload: { product: Product } }) => response.payload.product
        }),

        updateProduct: build.mutation<Product, Partial<Product>>({
            query: (data) => {
                const { _id: id, ...body } = data;
                return {
                    url: `product/${id}`,
                    method: 'PUT',
                    body,
                };
            },
            invalidatesTags: (_, __, { _id }) => [{ type: 'Product', id: _id }],
            transformResponse: (response: { payload: { product: Product } }) => response.payload.product
        }),

        deleteProduct: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `product/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_, __, id) => [{ type: 'Product', id }]
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;