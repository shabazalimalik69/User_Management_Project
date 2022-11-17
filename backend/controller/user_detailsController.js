const UserDetail = require("../model/user_detailsModel");

const createUserDetail = async (req, res) => {
  const {username} = req.body;
  try {
    const userDetail = await UserDetail.create(
      req.body
     
    );
    userDetail.save();
    return res.status(200).send(userDetail);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUserDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetail = await UserDetail.findById(id);

    return res.status(200).send(userDetail);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getAllUserDetails = async (req, res) => {
  try {
    const allUserDetails = await UserDetail.find({});

    return res.status(200).send(allUserDetails);
  } catch (err) {
    response.status(500).send(err.message);
  }
};

const updateUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetailUpdate = await UserDetail.findByIdAndUpdate(id, {
      $set: req.body,
    });

    return res
      .status(200)
      .send({ message: "UserDetail Updated Successfully", userDetailUpdate });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetailDelete = await UserDetail.findByIdAndDelete(id);
   return res.status(200).send({
      message: "UserDetail Deleted Successfully",
      userDetailDelete,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteAllUserDetails = async (req, res) => {
  try {
    const userDetails = await UserDetail.deleteMany({});

    return res.status(200).send(userDetails);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createUserDetail,
  getUserDetail,
  updateUserDetail,
  getAllUserDetails,
  deleteUserDetail,
  deleteAllUserDetails,
};
