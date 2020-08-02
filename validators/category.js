////////////////////////////////////////////////////////////////////////////////
// !--------------------------LOAD MIDDLEWARE-----------------------------------
////////////////////////////////////////////////////////////////////////////////

/**
 * Middleware to check validator in express framework
 */
const { check } = require("express-validator");

////////////////////////////////////////////////////////////////////////////////
// !--------------------------PUBLIC MODULE---------------------------------
////////////////////////////////////////////////////////////////////////////////

/**
 * Validator set use to check fields when creating a new category
 */
exports.categoryCreateValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
];