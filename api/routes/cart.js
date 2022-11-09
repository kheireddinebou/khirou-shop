const {
  verifyTokenAndAuthorisation,
  verifyToken,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");
const router = require("express").Router();

// Create

router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update

router.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete

router.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted successfully...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Cart

router.get("/find/:userId", async (req, res) => {
  try {
    const Cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Carts

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Carts = await Cart.find();
    res.status(200).json(Carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
