// import mysql from 'mysql2';
import connection from './db.js';

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Empire@07",
//     database: "FosterPet",
// });

// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly) VALUES (?,?,?,?,?,?,?)`;

// const input = ["Xave", 8, "Yorkie", "Dog", "male", true, true]

// const [rows, fields] = await connection.promise().query
// (insertQuery, input)

// console.log("This is all my rows", rows)

export const createPet = async (pet) => {

    const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    gender = pet.gender,
    is_kid_friendly = pet.is_kid_friendly,
    is_hypoallergenic = pet.is_hypoallergenic


    const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly) VALUES (?,?,?,?,?,?,?)`

    const input = [name, age, breed, species, gender, is_hypoallergenic, is_kid_friendly]

    try {
        const [result] = await connection.query(insertQuery, input)
        return result;
        
    } catch (error) {
        console.error(error)
    }

}
export const getPets = () => {
    const SelectQuery = "SELECT * FROM pets"
    return connection.query(SelectQuery)
    .then(result => {
        return result[0];
    })
    .catch(err => console.error(err))
}



// const newPet = {
//     name: "Fluffy",
//     age: 2,
//     species: "Poodle",
//     gender: "Female",
//     is_kid_friendly: false,
//     is_hypoallergenic: true,
// };

// // console.log("This is the new pet", await createPet(newPet))
// console.log("All the pets", await getPets())
// connection.end()