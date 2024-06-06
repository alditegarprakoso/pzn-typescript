describe("Object", () => {
  it("should name with javascript", () => {
    // Create Object
    // Tanda tanya pada hobbies itu optional type (boleh diisi atau tidak)
    const person: { id: number; name: string, hobbies?: string[] } = {
      id: 1,
      name: "Aldi",
    };
    console.info(person);

    person.id = 2;
    person.name = "Tegar";
    console.info(person);
  });
});
