const fs = require("fs");

const addData = (id, fName, lName, age,city) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => obj.id === id);
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fName: fName,
      lName: lName,
      age: age,
      city:city
    });
    saveAllData(allData);
    console.log("you have added new data !!");
  } else {
    console.log("ERROR, THERE IS DUPLICATED ID");
  }
};
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};
const saveAllData = (allData) => {
  const allDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", allDataJson);
};

const deleteData = (id) => {
  const allData = loadData();
  const dataToDelete = allData.find(obj => obj.id === id);
  if (dataToDelete) {
      const keepedData = allData.filter((obj) => obj.id !== id);
      saveAllData(keepedData);
      console.log("you have deleted a data !!");
  } else {
    console.log(`no data found with this id '${id}'`);
  }

};

const readData = (id) => {
  const allData = loadData();
  const targetedData = allData.find(obj => obj.id === id);
  if (targetedData) {
    console.log(targetedData);
  } else {
    console.log('ERROR , This id is not Found !');
  }
}
const readAllData = () => {
  const allData = loadData();
 allData.forEach(obj => console.log(`first name : ${obj.fName}, age : ${obj.age}, city : ${obj.city}`));

}

module.exports = {
  addData,
  deleteData,
  readData,
  readAllData
};
