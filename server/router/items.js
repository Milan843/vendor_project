const express = require("express");
const router = express.Router();
const items = require("../models/items");
const User = require("../models/model");
const Product = require("../models/product");
const ProductItem = require("../models/productItem");
const jwt = require("jwt-simple");
const auth = require("../middleware/auth");

//send the itemlist from the db
router.get("/itemlist", auth, async (req, res) => {
  await items
    .find({})
    .then(val => {
      res.send(val);
    })
    .catch(err => {
      res.send("error " + err);
    });
});
//Send the itemlist from the partcular token
router.get("/useritems", auth, async (req, res) => {
  const token = req.headers.authorization;
  try {
    const userdata = await User.findOne({ token });
    const userId = userdata._id;
    productName = await Product.find({ userId });
    res.send(productName);
  } catch (err) {
    res.send(err);
  }
});

//Save the items by token
router.post("/save", auth, async (req, res) => {
  const { product_id, Itemlist} = JSON.parse(req.body.params.body);
  const token = req.headers.authorization;
  const userdata = await User.findOne({ token });
  const userproducts = userdata.items;
  const userId = userdata._id;
  const product_name = product_id;
  // console.log(userId, userproducts, product_id);
  // options = { upsert: true, new: true, setDefaultsOnInsert: true };

  // await User.findOneAndUpdate(
  //   { token },
  //   { items: [{ [product_id]: Itemlist }, ...userproducts] }
  // );
  const productData = await Product.findOne({ product_name });
  console.log(productData);
  if (!productData) {
    await Product.insertMany({ product_name, userId });
    const productData2 = await Product.findOne({ product_name });
    useritem = Object.values(userproducts)[0];
    // console.log(productData2._id,userproducts,useritem,Itemlist);
    const productId = productData2._id;
    Itemlist.map(async item => {
      item_name = Object.keys(item)[0];
      quantity = Object.values(item)[0];
      console.log(item_name, quantity);

      await ProductItem.insertMany({ item_name, productId, quantity });
    });
  }
  else{
    await Product.remove({ product_name });
    await Product.insertMany({ product_name, userId });
    const productData2 = await Product.findOne({ product_name });
    useritem = Object.values(userproducts)[0];
    // console.log(productData2._id,userproducts,useritem,Itemlist);
    const productId = productData2._id;
    Itemlist.map(async item => {
      item_name = Object.keys(item)[0];
      quantity = Object.values(item)[0];
      console.log(item_name, quantity);

      await ProductItem.insertMany({ item_name, productId, quantity });
    });
  }
  res.send("SAVE");
});

router.get("/edit/:product_id",auth, async (req, res) => {
  const productId = req.params.product_id;
  const token = req.headers.authorization;
  try {
    const itemsdata = await ProductItem.find({ productId });
    const productdata = await Product.find({ _id:productId });
    productName=productdata[0].product_name
    
    res.send({item:itemsdata,product:productName})

  } catch (e) {
    res.send("error occured");
  }
});

//Delete the product from the list
router.get("/deleteproduct/:product_name",auth, async (req, res) => {
  const product_name = req.params.product_name;
  const productdata = await Product.remove({ product_name });
});
router.get("/deleteitem/:product_Id",auth, async (req, res) => {
  try {
    const product_id = req.params.product_Id;
    console.log(product_id, "klk");
    const itemdata = await ProductItem.findById({ _id: product_id });
    console.log(itemdata);
    await itemdata.remove();
    //console.log("res",res)
    res.redirect("http://localhost:3000/dashboard");
  } catch (e) {
    console.log("error", e);
    res.redirect("http://localhost:3000/dashboard");
  }
});

module.exports = router;
