// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name
        this.type = 'Trial User'
    }

        // Method 1
        greet() {
            console.log(`Welcome back, ${this.name}`)
        }
    
        // Method 2
        status() {
            console.log(`Current status: ${this.type}`)
        }
    
}

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`)
    }
}

// Instance of User Class
let anonDude = new User('Anonymous')
anonDude.greet()
anonDude.status()

// Instance of TrialUser class
let trialUser = new TrialUser('Paul')
trialUser.greet()
trialUser.trialEnding()
trialUser.status()

// Super
class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
    super(username, password);
    this.type = 'Bronze User',
    this.ccinfo = ccinfo
    }
    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo)
    }
}
        
        let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 000013);
        bronzeGuy.greet();
        bronzeGuy.status();
        console.log(bronzeGuy);

        const instructors = [
            {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
            {name: 'Ken', specialty: 'Norse Mythology', medals: 5},
            {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
            {name: 'Paul', specialty: 'Entomology', medals: 4},
        ]

        let instructor_names = []

        // for(let i = 0; i < instructors.length; i++){
        //     if(instructors[i].medals >= 5) {
        //         instructor_names.push(instructors[i].name)
        //     }
        // }
        const instructorNames = instructors.filter(instructor => instructor.medals >= 5)
        console.log(instructorNames)

        // instructors.forEach(instructor => {
        //     instructor_names.push(instructor_names)
        // })

        // console.log(instructor_names)

        // const instructorNames = instructors.map(instructor => instructor.name)
        // console.log(instructorNames)

let newObj = {newString: 'more strings', anotherString: "this is a string"}
console.log(newObj)
