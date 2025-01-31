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
  });

  it("should support overloading function", () => {
    function process(value: string): string;
    function process(value: number): number;
    function process(value: boolean): boolean;
    function process(value: any): any {
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

  it("should support function as parameter", () => {
    function sayHello(name: string, filter: (value: string) => string): string {
      return `Hello, ${filter(name)}`;
    }

    function upperCase(value: string): string {
      return value.toLocaleUpperCase();
    }

    expect(sayHello("Aldi", upperCase)).toBe("Hello, ALDI");
    expect(sayHello("Aldi", (value: string): string => value.toLocaleUpperCase())).toBe("Hello, ALDI");
  });
});
