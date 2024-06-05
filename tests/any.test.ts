describe('Any', () => { 
    it('should support in typescript', () => {
        const person: any = {
            name: 'Aldi',
            age: 25,
            address: 'Bogor'
        }

        person.hobbies = ['Cooking', 'Gaming'];

        console.info(person);
    })
 })