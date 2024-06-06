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
  })
});
