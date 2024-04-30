// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let alphabet_reversed = ""

// let alphabet_arr = [
   
// ]

// for(let i = alphabet.length - 1; i >= 0; i--) {
//     alphabet_reversed += alphabet[i]
// }

// for(let i = 0; i < alphabet.length; i++) {
//     alphabet_arr.push({
//         id: i + 1,
//         letter: alphabet[i],
//         idx: i
//     })
// }
// console.log(alphabet_arr);
// console.log(alphabet_reversed);


// let age = 64

// while (age < 65) {
//     console.count('Работать');
//     age++
//     console.log('Ура день рождение ' + age );
// }  



// let password = ''

// do {
//     password = +prompt('Password')
// } while (password !== 456258);

// alert('correct'     )





let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let vowels = []
let consonants = []


for(let i = 0; i < alphabet.length; i++) {
    let latter = alphabet[i]

   if ('AEIOUY'.indexOf(latter.toUpperCase()) !== -1) {
        vowels.push(latter)
   } else {
        consonants.push(latter)
   }
}


console.log(vowels);
console.log(consonants);


let users = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
        
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0,
        arr: []
    },
    {
        course: ' PROGRAMMING',
        arr: []
    },
    {
        course: ' 3DSMAX',
        count: 0,
        arr: []
    },
    {
        course: '  DIZAYN',
        count: 0,
        arr: []
    },
    {       
        course: '   BACKEND',
        count: 0,
        arr: []
    },
]


// for(let item of users) {
//     for(let category of categories){
//         if (users.info.faculity.toUpperCase === categories.course) {
//             categories.count++
//             category.arr.push(users.info)
            
//         }
//     }
// }

// console.table(categories);


for (let user of users) {
    switch (user.info.faculity.toUpperCase()) {
        case 'SMM':
            categories[0].count++;
            categories[0].arr.push(user);
            break;
        case 'PROGRAMMING':
            categories[1].count++;
            categories[1].arr.push(user);
            break;
        case '3DSMAX':
            categories[2].count++;
            categories[2].arr.push(user);
            break;
        case 'DIZAYN':
            categories[3].count++;
            categories[3].arr.push(user);
            break;
        case 'BACKEND':
            categories[4].count++;
            categories[4].arr.push(user);
            break;
        default:
            break;
    }
}

console.table(categories);





