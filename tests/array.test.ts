describe('Array', () => { 
    it('should name with javascript', () => {
        // Create Array
        const name: string[] = ['Aldi', 'Tegar', 'Prakoso'];
        const values: number[] = [1, 2, 3, 4, 5];

        console.info(name);
        console.info(values);

        // Read Only Array
        const hobbies: ReadonlyArray<string> = ['Cooking', 'Gaming'];
        console.info(hobbies);
        
        // Array Tuple
        const person: readonly [string, number, string] = ['Aldi', 25, 'Frontend Developer'];
        console.info(person);
    })
 })