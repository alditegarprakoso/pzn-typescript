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

  it("should support default value", () => {
    function sayHello(name: string = "Aldi"): string {
      return `Hello ${name}, my name is Aldi`;
    }

    expect(sayHello("Tegar")).toBe("Hello Tegar, my name is Aldi");
    expect(sayHello()).toBe("Hello Aldi, my name is Aldi");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}, my name is Aldi`;
      } else {
        return `Hello ${firstName}, my name is Aldi`;
      }
    }

    expect(sayHello("Aldi")).toBe("Hello Aldi, my name is Aldi");
    expect(sayHello("Aldi", "Tegar")).toBe("Hello Aldi Tegar, my name is Aldi");
  })
});
