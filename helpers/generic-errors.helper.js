exports.setErrors = (error, type="default") => {
  let errors = [];

  if(error.name === "SequelizeUniqueConstraintError") {
    for(e of error.errors) {
      errors.push( {message: e.message } )
    }
  }

  if(error.name === "SequelizeValidationError") {
    for(e of error.errors) {
      
        errors.push( {message: e.message } )
      
    }
  }
  return errors
}

// exports.getErrors = function (err, type = "others") {

//   if(type=="default"){
//     console.log("default");
//     console.log(err);
//     err.forEach( err_ => {
//       error.push({ message: err_.msg })
//     })
//     return error;
//   }

// }
