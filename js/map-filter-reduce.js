const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter(user => user.languages.length > 2 );
console.log(threeLanguages);

const emails = users.map(user => {
    return user.email
});
console.log(emails);

const experienceYears = users.reduce((total,user) => {
    return total + user.yearsOfExperience;
},0);

const averageExp = experienceYears/users.length;

console.log(averageExp);

let longEmail = users.reduce((longEmail, user ) => {
    if (longEmail.length > user.email.length) {
        return longEmail;
    } else {
        return user.email;
    }
});

let instructorsStr = users.reduce((finalStr,instructor, index) => {
    if (index < users.length -1){
        return "${finalStr}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, "
    } else {
        return "${finalStr}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}. "
    }
}, "Your instructors are: ");

console.log(instructorsStr);