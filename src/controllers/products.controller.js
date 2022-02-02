import Product from '../models/Product';


export const createProduct = async(req, res) => {
    const {name,category,price,imgUrl} = req.body;
    const newProduct = new Product({name,category,price,imgUrl});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const getProducts = (req, res) => {
    res.json('getting products.')
}
export const getProductById = (req, res) => {}
export const updateProductById = (req, res) => {}
export const deleteProductById = (req, res) => {}