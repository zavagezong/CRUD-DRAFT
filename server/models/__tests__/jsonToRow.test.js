const jsonToRow = require("../jsonToRow");
// const db = require("../database.json");
const dbTest = [
  {
    id: 1,
    category_id: null,
    name: "Capn Crunch Popcorn Chicken",
    instructions: "1. hi",
    cook_time: 547,
    img_url: "img_url"
  },
  {
    id: 2,
    category_id: null,
    name: "Pineapple Curry Bear",
    instructions: "hi 2",
    cook_time: 590,
    img_url: "img_url"
  }
];
const json = [
  {
    a: "AI for Marketing",
    start: "2019-08",
    end: "2019-12"
  },
  { a: "ML for Sales", start: "2019-05", end: "2019-11" }
];

describe("jsonTwo", () => {
  test("works", () => {
    const actual = jsonToRow(json);
    expect(actual).toEqual(`('AI for Marketing','2019-08','2019-12'),
('ML for Sales','2019-05','2019-11')`);
  });
  test("works with actual db", () => {
    const actual = jsonToRow(dbTest);
    expect(actual)
      .toEqual(`(1,null,'Capn Crunch Popcorn Chicken','1. hi',547,'img_url'),
(2,null,'Pineapple Curry Bear','hi 2',590,'img_url')`);
  });
});
