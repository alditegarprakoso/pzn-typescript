import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should name with typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Aldi",
      address: "Bogor",
      nib: "1234567890",
      npwp: "1234567890",
    };

    console.info(seller);

    seller.id = 2;
    seller.name = "Tegar";
    seller.address = "Jakarta";
    // NIB dan NPWP tidak bisa diubah karena readonly
    // seller.nib = "0987654321";
    // seller.npwp = "0987654321";
    console.info(seller);
  });

  it("should support function interface", () => {
    // Create Interface Function
    interface addFunction {
      (num1: number, num2: number): number;
    }

    const add: addFunction = (num1: number, num2: number): number => {
      return num1 + num2;
    };

    console.info(add(1, 2));
    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable interface", () => {
    // Create Indexable Interface
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Aldi", "Tegar", "Prakoso"];
    console.info(names);
    console.info(names[0]);
  });

  it("should support indexable interface for non number index", () => {
    // Create Indexable Interface
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Aldi",
      address: "Bogor",
    };

    console.info(dictionary);
    console.info(dictionary["name"]);
    console.info(dictionary["address"]);
  });

  it("should support extend interface", () => {
    const employee: Employee = {
      id: 1,
      name: "Aldi",
      divitsion: "IT",
    };

    const manager: Manager = {
      id: 2,
      name: "Tegar",
      divitsion: "IT",
      numberOfEmployees: 10,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Aldi",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Tegar"));
  });

  it("should support intersection type", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: number;
    }

    type Person = HasName & HasId;

    const person: Person = {
      id: 1,
      name: "Aldi",
    };

    console.info(person);
  });

  it ("should support type assertions", () => {
    const person: any = {
      name: "Aldi",
      age: 25,
      address: "Bogor",
    }

    const person2: Person = person as Person;
    console.info(person2);
  })
});
