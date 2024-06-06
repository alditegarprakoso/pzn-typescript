import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should name with typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Aldi",
      address: "Bogor",
    };

    console.info(seller);

    seller.id = 2;
    seller.name = "Tegar";
    console.info(seller);
  });
});
