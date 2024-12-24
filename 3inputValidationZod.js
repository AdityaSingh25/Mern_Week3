// //zod is for schema validation
// const express = require("express");

// const z = require("zod");

// const schema = z.array(z.number()); // for a array of numbers

// //how you will validate a data like this using zod
// // {
// //     email : string => email
// //     password: atleast 8 CharacterData
// //     country:"IN", "US"
// // }

// const schemaa = z.object({
//   email: z.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("US")),
// });

// const app = express();

// app.use(express.json());

// app.post("/", (req, res) => {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if (!response.success) {
//     res.status(411).json({
//       msg: "Send correct inputs",
//     });
//   } else {
//     res.json({
//       response,
//     });
//   }
// });

// app.listen(3000);

const z = require("zod");

function inputValidation(obj) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

inputValidation({ email: "adjisgmail.com", password: "ded32e33332" });
