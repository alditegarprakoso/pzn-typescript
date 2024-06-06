import { Customer, CustomerType } from "../src/enum"

describe('ENUM', () => { 
    it('should name with typescript', () => {
        const customer: Customer = {
            id: 1,
            name: "Aldi",
            type: CustomerType.GOLD
        }

        console.info(customer);
    })
 })