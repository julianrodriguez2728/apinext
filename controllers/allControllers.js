const {tecnology} = require("./data")


const getById = (id)=>{ 
    const filtered = tecnology.filter(product=> product.id === +id)
    return filtered
};

const filterCategory = (category)=>{
    const filtered = tecnology.filter(product=> product.category === `${category}`)
    return filtered
}

const getColors = (color)=>{
    const filtered = tecnology.filter(product=> product.color === `${color}`)
    return filtered;
}

const getBrand = (brand)=>{
    const filtered = tecnology.filter(product=> product.brand === `${brand}`)
    return filtered;
}

const subStock = (id, cant)=>{
    const dataStock = getById(id)
    const resp = dataStock.forEach((item)=>{

        const itemStock = item.stock - cant;

        if(item.stock === 0){

            return console.log("No hay Stock");

        }else if(itemStock < 0){

            return console.log("No hay Stock");

        }else{

            item.stock = itemStock

        }

    })
    return resp;
};

const addStock = (id, cant)=>{
    const dataStock = getById(id);

    const resp = dataStock.forEach((item)=>{
        item.stock = item.stock + cant
    })
    return resp
}

module.exports ={
    getById,
    filterCategory,
    getColors,
    getBrand,
    subStock,
    addStock
}
