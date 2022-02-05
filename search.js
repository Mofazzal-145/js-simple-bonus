//
/* 
const products = [
    {name:'iphone 14 mobile', price: 70000},
    {name:'samsung galaxy 14 mobile', price: 60000},
    {name:'dell laptop', price: 50000},
    {name:'asus laptop', price: 55000},
    {name:'lenovo laptop', price: 35000},
    {name:'Apple watch', price: 7000},
    {name:'samsung smart watch', price: 20000},
    {name:'shawmi watch', price: 27000}
];

function searchProducts(products, searchText){
    for(const product of products){
        if(product.name.includes(searchText)){ 
        //if(product.name.includes('watch')){ // 'laptop' and others
            console.log(product.name);
           // console.log(product.price);
        }
       // console.log(product.name);
    }
}

//searchProducts(products);
searchProducts(products,'mobile'); */


//

const products = [
    {name:'iphone 14 mobile', price: 70000},
    {name:'samsung galaxy 14 mobile', price: 60000},
    {name:'dell laptop', price: 50000},
    {name:'asus laptop', price: 55000},
    {name:'lenovo laptop', price: 35000},
    {name:'Apple watch', price: 7000},
    {name:'samsung smart watch', price: 20000},
    {name:'shawmi watch', price: 27000}
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){ 
           result.push(product);
           
        }
    }
    return result;
}

const found = searchProducts(products,'mobile');
console.log(found);

