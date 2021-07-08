export const selectProduct = ({ products }, productId) => {
  return products[productId] || { reviewIds: [] };
};

export const asArray = ({ products }) => (
  Object.keys(products).map(key => products[key])
);