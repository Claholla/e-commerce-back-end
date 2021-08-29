// Imported models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Model associations
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

Category.hasMany(Products, {
  foreignKey: "category_id"
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id"
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id"
});

// Model exports
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};