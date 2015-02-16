describe("GildedRose shop manager", function () {
  it("check value", function() {
    GildedRose();
    expect(items[0].quality).toBe(19);
    expect(items[1].quality).toBe(1);
    expect(items[2].quality).toBe(6);
    expect(items[3].quality).toBe(80);
    expect(items[4].quality).toBe(21);
    expect(items[5].quality).toBe(4);
  });
});