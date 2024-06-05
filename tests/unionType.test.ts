describe("Union", () => {
  it("should support in typescript", () => {
    // Union itu bisa banyak tipe data untuk 1 variable
    let value: string | number | boolean = "Aldi";
    console.info(value);

    value = 25;
    console.info(value);

    value = true;
    console.info(value);
  });

  it("validation type of for union", () => {
    function process(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toLocaleUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("Aldi")).toBe("ALDI");
    expect(process(25)).toBe(27);
    expect(process(true)).toBe(false);
  });
});
