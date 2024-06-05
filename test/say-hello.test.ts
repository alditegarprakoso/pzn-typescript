import { sayHello } from "../src/say-hello"

describe('sayHello', () => { 
    it('should say hello aldi', () => {
        expect(sayHello('Aldi')).toBe('Hello Aldi')
    })
 })