const express = require('express');
const router = express.Router();
const { Products } = require('../models/product.model');

router
  .route("/products")
  .get(async (req, res) => {
    try {
      const getData = await Products.find({});
      res.status(200).json({ success: true, data: getData });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newProductDataFromClient = req.body;
      const newProduct = new Products(newProductDataFromClient);
      await newProduct.save(); 
      res.status(200).json({ success: true, data: newProduct }); 
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  });
module.exports = router;
