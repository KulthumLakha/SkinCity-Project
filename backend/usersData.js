import bcrypt from "bcrypt";
const data = [
  {
    name: "Jeong Jaehyun",
    email: "jeongjaehyun@nct.com",
    password: bcrypt.hashSync("test123.", 10),
  },
];

export default data;
