
function secretSociety(members) {
    
    let initials = members.map(name => name[0]);

    initials.sort();
   
    return initials.join('');
}


console.log(secretSociety(["Ana","Lorena","Maria","Olga"])); 
console.log(secretSociety(['Ernestina', 'Paula', 'Nadia',])); 
console.log(secretSociety(['Eleonor', 'Susana', 'Larissa','Amairany','Teresa'])); 
