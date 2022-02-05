
//
const products = [
    {name:'iphone 14 mobile', price: 70000},
    {name:'samsung galaxy 14 mobile', price: 6000},
    {name:'dell laptop', price: 50000},
    {name:'asus laptop', price: 55000},
    {name:'lenovo laptop', price: 35000},
    {name:'Apple watch', price: 7000},
    {name:'samsung smart watch', price: 2000},
    {name:'shawmi watch', price: 27000}
];

/* for(const product of products){
    if(product.price < 5000){
        break;
    }
    console.log(product);
} */
for(const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product);
}