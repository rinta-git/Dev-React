export const checkValidFields = (email, password) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isValidEmail) {
    return "Email address is not valid";
  }
  if (!isValidPassword) {
    return "Password is not valid";
  }
  return null;
};

export const checkNameField = (name) => {
  const isValidName = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isValidName) {
    return "Name is not valid";
  }
  return null;
};
