//Create Product
exports.createProduct = async (req, res) => {
  try {
    const data = req.body;
    res.status(201).json({ status: "success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.toString() });
  }
};

//Edit Product
exports.readProduct = async (req, res) => {
  try {
    const data = {
      ProductName: "Mobile",
      Price: 40000,
    };
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.toString() });
  }
};

//Update Product
exports.updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const data = req.body;
    res.status(200).json({ status: "success", data: data, id: id });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.toString() });
  }
};

//Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    res.status(200).json({ status: "success", id: id });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.toString() });
  }
};
