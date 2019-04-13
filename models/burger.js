var orm = require("../config/orm.js");
// The code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Display all burgers in the db.
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db.
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // Delete a burger from the db.
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file.
module.exports = burger;




// /* Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.
// //I dont know what this is Im just copying it 
// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");
// I have no clue what this does*/
// var orm = require("../config/orm.js");

// // The code that will call the ORM functions using burger specific input for the ORM.
// var burger = {
//   // Display all burgers in the db.
//   selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//           cb(res);
//       });
//   },
//   // Add a new burger to the db.
//   insertOne: function(cols, vals, cb) {
//       orm.insertOne("burgers", cols, vals, function(res) {
//           cb(res);
//       });
//   },
//   // Change the devoured status to true.
//   updateOne: function(objColVals, condition, cb) {
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//           cb(res);
//       });
//   },
//   // Delete a burger from the db.
//   deleteOne: function(condition, cb) {
//       orm.deleteOne("burgers", condition, function(res) {
//           cb(res);
//       });
//   }
// };












// // var burger = {
// //   all: function(cb) {
// //     orm.all(function(result) {
// //       cb(result);
// //     });
// //   },
// //   // The variables cols and vals are arrays.
// //   create: function(burgerName, cb) {
// //     orm.create(burgerName, function(res) {
// //       cb(res);
// //     });
// //   },
// //   update: function(objColVals, condition, cb) {
// //     objColVals.date = new Date().toISOString().slice(0, 19).replace('T','');
// //     orm.update("burger", objColVals, condition, function(res) {
// //       cb(res);
// //     });
// //   },
// //   delete: function(condition, cb) {
// //     orm.delete("burger", condition, function(res) {
// //       cb(res);
// //     });
// //   }
// //};

// // Export the database functions for the controller (catsController.js).
// // module.exports = burger;
