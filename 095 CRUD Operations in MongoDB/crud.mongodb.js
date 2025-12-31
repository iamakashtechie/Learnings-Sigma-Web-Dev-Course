






// https://www.mongodb.com/docs/manual/reference/operator/query/
// JUST LOOK AT THE ABOVE LINK FOR ALL THE OPERATORS
// Reference









use("CRUD_DB")

console.log(db);

// CREATE
db.createCollection("collections");

db.collections.insertOne({
    name: "John Doe",
    age: 25,
    email: "johndoe1@mail.com"
});

db.collections.insertMany(
    [
        {
            "name": "John Doe",
            "age": 25,
            "email": "johndoe1@mail.com"
        },
        {
            "name": "John th",
            "age": 34,
            "email": "johndoe2@mail.com"
        },
        {
            "name": "John zde",
            "age": 28,
            "email": "johndoe3@mail.com"
        },
        {
            "name": "John ljkjh",
            "age": 31,
            "email": "johndoe4@mail.com"
        },
        {
            "name": "John xhfx",
            "age": 20,
            "email": "johndoe5@mail.com"
        }
    ]    
);

// READ

let a = db.collections.find({age: 25});
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

let b = db.collections.findOne({age: 25});
console.log(b);

// UPDATE
db.collections.updateOne({age: 25}, {$set: {name: "John Doe pachhis"}});
db.collections.updateMany({age: 20}, {$set: {name: "John Doe biis"}});

// DELETE
db.collections.deleteOne({age: 25});
db.collections.deleteMany({age: 25});