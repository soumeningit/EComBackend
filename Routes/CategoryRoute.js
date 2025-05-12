const express = require('express');
const router = express.Router();

const { auth, isEmployee, isAdmin } = require("../Middleware/AuthMiddleWare");

const {
    createCategory,
    getCategories,
    findItemsByCategory,
    getProductByCategoryName
} = require("../Controller/Category");

router.post("/create-category", auth, isAdmin || isEmployee, createCategory);
router.get("/get-categories", getCategories);
router.get("/get-products-by-category", findItemsByCategory);
router.get("/get-products-by-category-name", getProductByCategoryName);

module.exports = router;