var models = require('./db_models');
let User = models.User();
module.exports = {
  saveData: function (data) {
    var userData = new User(data);
    userData.password = userData.generateHash(data.password);
    var res = true;
    userData.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
    return res;
  },
  findById: function (id) {
    return User.findById({_id: id});
  },
  findAll: function () {
    return User.find({});
  },
  updateData: function (reg, id) {
    var res = true;
    reg.updated_at = new Date();
    User.findOneAndUpdate({"_id": id}, reg, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
    return res;
  },
  removeData: function (result) {
    return User.remove({"_id": result._id});
  }
}