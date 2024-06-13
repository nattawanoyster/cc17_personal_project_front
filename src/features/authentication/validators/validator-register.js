import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().required().trim(),
  email: Joi.alternatives([Joi.string().email({ tlds: false })]),
  password: Joi.string()
    .required()
    .trim()
    .pattern(/^[0-9a-zA-Z]{1,20}$/),
  confirmPassword: Joi.string().required().trim().valid(Joi.ref("password")),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });
  console.dir(error);
};

export default validateRegister;

//   // if (error) {
//   //   const result = error.details.reduce((acc, el) => {}, {});
//   // }
// };
// import Joi from "joi";

// export default function validateRegister(data) {
//   const schema = Joi.object({
//     username: Joi.string().required().messages({
//       "string.empty": "Username is required",
//     }),
//     email: Joi.string()
//       .email({ tlds: { allow: false } })
//       .required()
//       .messages({
//         "string.empty": "Email is required",
//         "string.email": "Email must be a valid email address",
//       }),
//     password: Joi.string().min(6).required().messages({
//       "string.empty": "Password is required",
//       "string.min": "Password must be at least 6 characters long",
//     }),
//     confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
//       "any.only": "Passwords must match",
//       "string.empty": "Confirm Password is required",
//     }),
//   });

//   return schema.validate(data, { abortEarly: false });
// }
