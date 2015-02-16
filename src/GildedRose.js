var GildedRose = function () { 
  var items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality(items);
};

GildedRose.updateQuality = function (items) {
  for (var i = 0; i < items.length; i++){
    if (items[i].category() != "sulfuras"){
      if (items[i].category() == "agedBrie"){
        items[i].changeQuality(1);
      }
      else if (items[i].category() == "backstagePasses"){
        if (items[i].sellIn <= 0){
          items[i].adjustQuality(0);
        }
        else if (items[i].sellIn < 6){
          items[i].changeQuality(3);
        }
        else if (items[i].sellIn < 11){
          items[i].changeQuality(2);
        }
        else{
          items[i].changeQuality(1);
        }
      }
      else if (items[i].category() == "conjured"){
        items[i].changeQuality(-2);
      }
      else {
        items[i].changeQuality(-1);
      }

      if (items[i].qualitySurpassMin()){
        items[i].adjustQuality(0);
      }
      if (items[i].qualitySurpassMax()){
        items[i].adjustQuality(50);
      }
    }
  }
  return items;
};