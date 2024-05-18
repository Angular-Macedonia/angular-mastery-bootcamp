export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
}

export const Products: Product[]  = [
    {
      id: "1",
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse with adjustable DPI settings.",
      price: 29.99,
      category: "Electronics",
    },
    {
      id: "2",
      name: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with blue switches.",
      price: 79.99,
      category: "Electronics",
    },
    {
      id: "3",
      name: "Running Shoes",
      description: "Lightweight running shoes with breathable mesh upper.",
      price: 59.99,
      category: "Footwear",
    },
    {
      id: "4",
      name: "Smartwatch",
      description: "Water-resistant smartwatch with fitness tracking features.",
      price: 129.99,
      category: "Wearables",
    },
    {
      id: "5",
      name: "Noise Cancelling Headphones",
      description: "Over-ear headphones with active noise cancellation.",
      price: 199.99,
      category: "Audio",
    },
    {
      id: "6",
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps drinks cold for 24 hours.",
      price: 24.99,
      category: "Kitchen",
    }
  ];
