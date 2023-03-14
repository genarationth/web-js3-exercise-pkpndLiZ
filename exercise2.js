// part1
const greetingFriends = (friend1, friend2, friend3) => {
    console.log(`Welcome ${friend1}, ${friend2}, ${friend3}`);
}
   
greetingFriends('pk', 'tee', 'kitti');


//part1

const ageCalculate = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`current year: ${new Date().getFullYear()} and birth year: ${birthYear}`);
    return age;

}

console.log(`Here your age: ${ageCalculate(1996)}`);

// part3
const displayNameAndAge = (name1, age1, name2, age2, name3, age3) => {
    console.log(`Welcome ${name1} you are ${age1}. Welcome ${name2} your are ${age2}. Welcome ${name3} your are ${age3}.`);
}

console.log(displayNameAndAge('PK', 20, 'Tee', 30, 'Kitti', 30));