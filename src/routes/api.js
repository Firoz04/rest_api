const express = require("express");
const productController = require("../controllers/productControllers");
const router = express.Router();

//Create product api
router.post("/create-product", productController.createProduct);
router.get("/read-product", productController.readProduct);
router.put("/update-product/:id", productController.updateProduct);
router.delete("/delete-product/:id", productController.deleteProduct);

module.exports = router;
