const baseUrl = import.meta.env.VITE_API_BASE_URL_DUMMYJSON

export const urls = {
    carts: {
        allCarts: baseUrl + '/carts',
        byId: (id: number) => baseUrl + '/carts' + id,
        userCartsById: (id: number) => baseUrl + '/user/' + id + '/carts',
    }
}