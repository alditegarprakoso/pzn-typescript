import { Employee, Manager } from "../src/employee";
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
    }

    console.info(employee);
    console.info(manager);
  });
});
