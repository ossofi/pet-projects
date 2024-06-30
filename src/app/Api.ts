export function loadInfo(id?: any): Promise<ProductApiResponse> {
  return fetch(`https://dummyjson.com/products/category/${id}`).then(
    (response) => response.json(),
  );
}
type ProductApiResponse = {
  products: any[];
};

export function loadCategList(params?: any) {
  return fetch('https://dummyjson.com/products/category-list')
    .then((response) => response.json())
    .then((data) => data);
}
