describe("Object", () => {
  it("should name with javascript", () => {
    // Create Object
    const person: { id: number; name: string } = {
      id: 1,
      name: "Aldi",
    };
    console.info(person);

    person.id = 2;
    person.name = "Tegar";
    console.info(person);
  });
});
