const data = require("./data");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "to add person data",
  builder: {
    id: {
      describe: "id name of person",
      demandOption: true,
      type: "string",
    },
    fName: {
      describe: "first name of person",
      demandOption: true,
      type: "string",
    },
    lName: {
      describe: "last name of person",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "age of person",
      demandOption: true,
      type: "string",
    },
    city: {
      describe: "city of person",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.addData(x.id, x.fName, x.lName, x.age, x.city);
  },
});

yargs.command({
  command: "delete",
  describe: "to delete person data",
  builder: {
    id: {
      describe: "to delete data with id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.deleteData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to delete data with id",
  builder: {
    id: {
      describe: "this is id to read data with",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.readData(x.id);
  },
});
yargs.command({
  command: "list",
  describe: "to read all data",
  handler: () => {
    data.readAllData();
  },
});
yargs.parse();
