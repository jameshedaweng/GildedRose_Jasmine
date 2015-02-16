describe("GildedRose shop manager", function () {
  it("check value", function() {
    GildedRose();
    expect(items[0].quality).toBe(19);
  });
});