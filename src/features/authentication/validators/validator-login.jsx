import Joi from "joi";

const loginSchema = Joi.object({
  username: Joi.string()
    .required()
    .messages({ "string.empty": " Username is invalid" }),
  password: Joi.string()
    .required()
    .messages({ "string.empty": " Password is invalid" }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, {
    abortEarly: false,
  });
  console.dir(error);

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
