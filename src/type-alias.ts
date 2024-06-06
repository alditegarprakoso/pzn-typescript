export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string; // Tanda tanya ini untuk optional type (boleh diisi atau tidak)
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // Tanda tanya ini untuk optional type (boleh diisi atau tidak)
};
