export interface ShoppingCart {
  id: number
  user_id_clerk: string
  status: 'ativo' | 'finalizado'
  created_at: Date
  updated_at: Date
}

export interface ShoppingCartResponse {
  shopping_cart_id: number
  valor_total: number
}

export interface CartItem {
  id: number
  product: {
    id: number
    name: string
    price: number
    discounted_price?: number
    url_image: string
  }
  quantity: number
}

export interface Product {
  product_id: number
  quantity: number
}