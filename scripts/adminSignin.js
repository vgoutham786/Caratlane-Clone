let adminArr = [
  {
    email: "ravin@gmail.com",
    password: "ravin@123",
  },
  {
    email: "goutham@gmail.com",
    password: "goutham@123",
  },
  {
    email: "prerna@gmail.com",
    password: "prerna@123",
  },
  {
    email: "ganesh@gmail.com",
    password: "ganesh@123",
  },
];

localStorage.setItem("adminUsers", JSON.stringify(adminArr));
