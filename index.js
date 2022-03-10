
use assignment
db
db.createCollection("users")
db.users.insert({"first_name": "Piush", "last_name": "kumar", "email": "piush@gmail.com", "gender": "male", "ip_address": "126767", "age": 20})
db.users.insert({"first_name": "Manish", "last_name": "lal", "email": "manish@gmail.com", "gender": "male", "ip_address": "7654543", "age": 21})
db.users.insertMany([{"first_name":"karan", "last_name": "Singh", "email": "karan@gmail.com", "gender": "male", "ip_address": "67565890", "age": 18}, {"first_name": "anjali", "last_name": "rani", "email": "anjalirani@gmail.com", "gender": "female", "ip_address": "87854", "age": 23}, {"first_name":"moni", "last_name": "rani", "email": "monirani@gmail.com", "gender": "female", "ip_address": "98777843", "age": 22}])
 db.users.insertMany([{"first_name":"kamal", "last_name": "raj", "email": "kamalraj@gmail.com", "gender": "male", "ip_address": "2342489", "age": 17}, {"fisrt_name": "rohit", "last_name": "dubee", "email": "rohitdubbe@gmail.com", "gender": "male", "ip_address": "88432", "age": 21}, {"first_name": "vikash", "last_name": "Singahniya", "email":"vikash@gmail.com", "gender":"male", "ip_address": "5454435", "age": 26}, {"first_name":"Ankita", "last_name": "kumari", "email": "ankita@gmail.com", "gender": "female", "ip_address": "765443543", "age": 33}, {"first_name":"santu", "last_name": "Singh", "email": "santu@gmail.com", "gender": "male", "ip_address": "63434321", "age": 55}])
  db.users.find({})

  Result:

  { "_id" : ObjectId("62262a236332e4601540b78d"), "first_name": "Piush", "last_name": "kumar", "email": "piush@gmail.com", "gender": "male", "ip_address": "126767", "age": 20}
{ "_id" : ObjectId("62263947adbc51cea6499699"), "first_name": "Manish", "last_name": "lal", "email": "manish@gmail.com", "gender": "male", "ip_address": "7654543", "age": 21}
{ "_id" : ObjectId("62263a83adbc51cea649969a"), "first_name":"karan", "last_name": "Singh", "email": "karan@gmail.com", "gender": "male", "ip_address": "67565890", "age": 18}
{ "_id" : ObjectId("62263a83adbc51cea649969b"),  {"first_name": "anjali", "last_name": "rani", "email": "anjalirani@gmail.com", "gender": "female", "ip_address": "87854", "age": 23}
{ "_id" : ObjectId("62263a83adbc51cea649969c"),  "first_name":"moni", "last_name": "rani", "email": "monirani@gmail.com", "gender": "female", "ip_address": "98777843", "age": 22}
{ "_id" : ObjectId("62263c97adbc51cea649969d"),  "first_name":"kamal", "last_name": "raj", "email": "kamalraj@gmail.com", "gender": "male", "ip_address": "2342489", "age": 17}
{ "_id" : ObjectId("62263c97adbc51cea649969e"),  "fisrt_name": "rohit", "last_name": "dubee", "email": "rohitdubbe@gmail.com", "gender": "male", "ip_address": "88432", "age": 21}
{ "_id" : ObjectId("62263c97adbc51cea649969f"), "first_name": "vikash", "last_name": "Singahniya", "email":"vikash@gmail.com", "gender":"male", "ip_address": "5454435", "age": 26}
{ "_id" : ObjectId("62263c97adbc51cea64996a0"),  "first_name":"Ankita", "last_name": "kumari", "email": "ankita@gmail.com", "gender": "female", "ip_address": "765443543", "age": 33}
{ "_id" : ObjectId("62263c97adbc51cea64996a1"),  {"first_name":"santu", "last_name": "Singh", "email": "santu@gmail.com", "gender": "male", "ip_address": "63434321", "age": 55}




> db.users.findOne({})

result:

{
        "_id" : ObjectId("62262a236332e4601540b78d"),
        "first_name" : "Piush",
        "last_name" : "kumar",
        "email" : "piush@gmail.com",
        "gender" : "male",
        "ip_address" : "126767",
        "age" : 20
}