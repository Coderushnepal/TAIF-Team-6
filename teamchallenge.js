let people = [
    { name: 'Rabina', role: 'developer', founder: true },
    { name: 'Sushmita', role: 'developer', founder: false },
    { name: 'Nishla', role: 'designer', founder: false },
    { name: 'Kanchan', role: 'Data analyst', founder: false }
]

// Displaying the names and roles of all the founding members
for (i = 0; i < people.length; i++) {
    console.log(`${people[i].name} is a ${people[i].role}`)

    if (people[i].role === 'Data analyst') {
        console.log(`${people[i].name} is the one incharge of data`)
    }

    // assigning CTO role to the member who is founder
    if (people[i].founder) {
        people[i].role = 'CTO'
    }
}

// adding new developer
people.push({ name: 'Shristi', role: 'developer' })

// Displaying all the members after assigning new CTO and adding a new developer
for (i = 0; i < people.length; i++) {
    console.log(`${people[i].name} is a ${people[i].role}`)
}
