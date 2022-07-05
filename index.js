//@ts-check

console.log('week task');

let catalog = {
  products: [
    {
      id: 'x',
      name: 'shoe',
      price: 1500
    },
    {
      id: 'y',
      name: 't-shirt',
      price: 1200
    },
    {
      id: 'z',
      name: 'jean',
      price: 2100
    }
  ],
  categories: [
    {
      id: 'a',
      name: 'clothing',
      products: ['x', 'z']
    },
    {
      id: 'b',
      name: 'jewelry',
      products: ['y', 'z']
    }
  ]
};


/**
* function to add products to the catalog object.
* @param {string} id
* @param {string} name
* @param {number} price
* @returns {string}
*/
function addProducts (id, name, price){
  catalog.products.push({id, name, price})
  console.log(catalog.products)
  return 'product added successfully'
}
console.log(addProducts('w', 'skirt', 1000))

/**
* function to assign products to a category.
* @param {string} categoryId
* @param {string} productToAdd
*/
function assignProductsToCategory (categoryId, productToAdd){
  const category = catalog.categories.find((productObj) => productObj.id == categoryId)
  category.products.push(productToAdd)
  console.log(catalog.categories)
  return 'product assigned to category successfully'
}
console.log(assignProductsToCategory('a', 'w'))


/**
* function to get all the products of a category which have a price greater than certain value.
* @param {string} categoryId
* @param {number} price
*/
function getProductsByCategoryWithPriceGreaterThan(categoryId, price) {
  let productObjectsByCategory = []
  const category = catalog.categories.find(productObj => productObj.id === categoryId)
  const categoryProducts = category.products
  
  catalog.products.forEach((product) => {
    if(categoryProducts.includes(product.id)){
      productObjectsByCategory.push(product)
    } 
  })
  
  const result = productObjectsByCategory.filter(productObj => productObj.price > price);
  return result
}
console.log(getProductsByCategoryWithPriceGreaterThan('a', 1300))


/**
* function to get all the products which have a price greater than certain value.
* @param {number} price
*/
function getProductsWithPriceGreaterThan(price) {
  const filteredProducts = catalog.products.filter(productObj => productObj.price > price);
  return filteredProducts
}
console.log(getProductsWithPriceGreaterThan(2000))

