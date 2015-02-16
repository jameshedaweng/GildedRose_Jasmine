describe("GildedRose shop manager updates", function () {
  it("should decrease by 1 if normal", function() {
    items = [];
    items.push(new Item("Dummy Item", 10, 20));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(19);
  });

  it("should increase by 1 if aged brie", function() {
    items = [];
    items.push(new Item("Dummy Aged Brie", 2, 0));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(1);
  });

  it("should increase by 1 if backstage passes more than 10 days", function() {
    items = [];
    items.push(new Item("Dummy Backstage passes", 15, 20));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(21);
  });

  it("should increase by 2 if backstage passes between 10 days and 5 days", function() {
    items = [];
    items.push(new Item("Dummy Backstage passes", 6, 20));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(22);
  });

  it("should increase by 3 if backstage passes within 5 days", function() {
    items = [];
    items.push(new Item("Dummy Backstage passes", 5, 20));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(23);
  });

  it("should decrease to 0 if backstage passes passed", function() {
    items = [];
    items.push(new Item("Dummy Backstage passes", 0, 20));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(0);
  });

  it("should decrease by 2 if conjured", function() {
    items = [];
    items.push(new Item("Dummy Conjured", 3, 6));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(4);
  });

  it("should not change if sulfuras", function() {
    items = [];
    items.push(new Item("Dummy Sulfuras", 0, 80));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(80);
  });
});

describe("GildedRose shop manager quality", function (){
  it("should not surpass 50", function() {
    items = [];
    items.push(new Item("Dummy Item", 2, 55));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(50);
  });

  it("should not lower than 0", function() {
    items = [];
    items.push(new Item("Dummy Item", 2, -1));
    GildedRose.updateQuality(items);
    expect(items[0].quality).toBe(0);
  });
});