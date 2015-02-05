var GildedRose = function () {
  console.log("OMGHAI!");
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
    if ("Sulfuras, Hand of Ragnaros" != items[i].name){
      if ("Aged Brie" != items[i].name && "Backstage passes to a TAFKAL80ETC concert" == items[i].name){
        if ("Aged Brie" != items[i].name){
          changeQuality(i, 1);
        }
        else{
          if (items[i].sellIn <= 0){
            items[i].quality = 0;
          }
          else if (items[i].sellIn < 6){
            changeQuality(i, 3);
          }
          else if (items[i].sellIn < 11){
            changeQuality(i, 2);
          }
          else{
            changeQuality(i, 1);
          }
        }
      }
      else{
        if ("Conjured Mana Cake" != items[i].name){
          changeQuality(i, -2);
        }
        else{
          changeQuality(i, -1);
        }
      }
    }
  }
  return items;
};

GildedRose.changeQuality = function(i, rate){
  if (items[i].quality <= 50 && items[i].quality > 0){
    items[i].quality = items[i].quality + rate;
  }
};