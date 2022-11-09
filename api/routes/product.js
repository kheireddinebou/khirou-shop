const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorisation,
} = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();

// Create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Products

router.get("/", async (req, res) => {
  const qnew = req.query.new;
  const qcategory = req.query.category;

  try {
    let products;
    if (qnew && qcategory) {
      products = await Product.find({
        categories: {
          $in: [qcategory],
        },
      })
        .sort({ _id: -1 })
        .limit(1);
    } else if (qnew) {
      products = await Product.find({}).sort({ _id: -1 }).limit(1);
    } else if (qcategory) {
      products = await Product.find({
        categories: {
          $in: [qcategory],
        },
      });
    } else {
      products = await Product.find({});
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
