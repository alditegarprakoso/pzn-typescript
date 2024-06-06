describe("Function test", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}, my name is Aldi`;
    }

    expect(sayHello("Aldi")).toBe("Hello Aldi, my name is Aldi");

    function printHello(name: string): void {
        console.info(`Hello ${name}, my name is Aldi`);
    }

    printHello("Aldi");
  });
});
