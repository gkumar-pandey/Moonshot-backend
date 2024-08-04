import Data from "../model/data.model.js";
import User from "../model/user.model.js";

const createDataController = async (req, res) => {
  const { date, age, gender, minAge, maxAge, A, B, C, D, E, F } = req.body;
  try {
    const newData = new Data({
      date,
      age,
      gender,
      minAge,
      maxAge,
      A,
      B,
      C,
      D,
      E,
      F,
    });
    await newData.save();
    return res
      .status(200)
      .json({ message: "Task created successfully", data: newData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const getDataController = async (req, res) => {
  try {
    const data = await Data.find();
    return res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const updateDataController = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Data updated successfully", task: task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const deleteDataController = async (req, res) => {
  try {
    return res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

export {
  createDataController,
  getDataController,
  updateDataController,
  deleteDataController,
};
