// Imported router and models
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include:
        [{
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }]
    });
    res.status(200).json(categoryData);
  } catch(err) {
      res.status(500).json(err)
  }
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include:
      [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category exists by this ID!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT - Update a category by its ID
router.put('/:id', (req, res) => {
  Category.update({
    id: req.body.id,
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then((categoryUpdate) => {
    res.json(categoryUpdate)
  })
  .catch((err) => res.json(err))
});

// DELETE a category by its ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category exists by this ID!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
