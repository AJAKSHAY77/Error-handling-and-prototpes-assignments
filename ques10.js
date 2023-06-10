//Write a function that takes an array of products and returns a function that filters the array by a given product
//category. The function must filter an eCommerce products array by a specific category. The closure filters
//products using the filter() method. Finally, it returns a new array containing only the products with the same
//category as the input.

function createcategoryfilter(pro){
    return function filteringcategory(c){
        return pro.filter(function(el){
            return el.category=== c
        })
    }

}


const products = [
    { name: "iPhone 12", category: "Electronics" },
    { name: "Samsung Galaxy S21", category: "Electronics" },
    { name: "shirt", category: "Fashion" },
    { name: "Sony Bravia TV", category: "Electronics" },
    { name: "Nike Shoes", category: "Fashion" },
]

const filterebycategory = createcategoryfilter(products)
const filteredproducts = filterebycategory("Electronics")
console.log(filteredproducts);



