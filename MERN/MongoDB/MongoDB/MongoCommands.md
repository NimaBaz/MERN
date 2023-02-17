Create a database called 'my_first_db'.
1. use my_first_db

Create students collection.
2. db.createCollection("students")

Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
db.item.insert({name: "Nima Bazofti", home_state: "CA", lucky_number: 10, birthday: {month: 03, day: 12, year: 1993} })

Create 5 students with the appropriate info.
db.item.insert({name: "Nima Bazofti", home_state: "CA", lucky_number: 10, birthday: {month: 03, day: 12, year: 1993} })
db.item.insert({name: "Big Man", home_state: "CA", lucky_number: 9, birthday: {month: 07, day: 23, year: 1990}})
db.item.insert({name: "Sosa Guwop", home_state: "CA", lucky_number: 3, birthday: {month: 01, day: 1, year: 1987}})
db.item.insert({name: "Sam Jackson", home_state: "CA", lucky_number: 7, birthday: {month: 09, day: 7, year: 1996}})
db.item.insert({name: "Lebron James", home_state: "CA", lucky_number: 23, birthday: {month: 04, day: 10, year: 1980}})
db.item.insert({name: "Tom Holland", home_state: "CA", lucky_number: 17, birthday: {month: 02, day: 27, year: 1998}})

Get all students.
db.item.find()

Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.item.find({home_state: "CA"})
db.item.find({home_state: "WA"})

Get all students whose lucky number is greater than 3
db.item.find({lucky_number: {$gt: 3}})

Get all students whose lucky number is less than or equal to 10
db.item.find({lucky_number: {$lte: 10}})

Get all students whose lucky number is between 1 and 9 (inclusive)
db.item.find({lucky_number: {$gt: 0, $lte: 9}})

Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.item.update({}, {$set: {interests: ["coding", "brunch", "MongoDB"]}}, {multi: true})

Add some unique interests for each particular student into each of their interest arrays.
db.item.update({}, {$push: {interests: "bird"}}, {multi: true})

Add the interest 'taxes' into someone's interest array.
db.item.update({name: "Homer Simpson"}, {$push: {interests: "taxes"}})

Remove the 'taxes' interest you just added.
db.item.update({name: "Homer Simpson"}, {$pop: {interests: 1}})

Remove all students who are from California.
db.item.remove({home_state: "CA"}, false)

Remove a student by name.


Remove a student whose lucky number is greater than 5 (JUST ONE)

Add a field to each student collection called 'number_of_belts' and set it to 0.

Increment this field by 1 for all students in Washington (Seattle Dojo).
db.item.update({home_state: 'CA'}, {$inc: {number_of_belts:1}})
db.item.update({home_state: 'WA'}, {$inc: {number_of_belts:1}})

Rename the 'number_of_belts' field to 'belts_earned'

Remove the 'lucky_number' field.

Add a 'updated_on' field, and set the value as the current date.