
exports.getDate = function () {  // don't use getDate() as it we dont want to run it here

  const today = new Date();
  const options = {
    weekday:'long',
    day:'numeric',
    month:'long'
  };

  return today.toLocaleDateString('en-US', options);

};
