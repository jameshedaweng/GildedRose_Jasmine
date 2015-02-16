var items = [];
var GildedRose = function () {
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  GildedRose.updateQuality();
};

GildedRose.updateQuality = function () {
  for (var i = 0; i < items.length; i++){
    if (!GildedRose.nameCheck(i, "Sulfuras")){
      if (GildedRose.nameCheck(i, "Aged Brie")){
        GildedRose.changeQuality(i, 1);
      }
      else if (GildedRose.nameCheck(i, "Backstage passes")){
        GildedRose.backstagePasses(i);
      }
      else if (GildedRose.nameCheck(i, "Conjured")){
        GildedRose.changeQuality(i, -2);
      }
      else {
        GildedRose.changeQuality(i, -1);
      }
    }
  }
  return items;
};

GildedRose.nameCheck = function(i, str){
  return items[i].name.indexOf(str) > -1;
};

GildedRose.changeQuality = function(i, rate){
  items[i].quality += rate;
  if (items[i].quality > 50){
    items[i].quality = 50;
  }
  if (items[i].quality < 0){
    items[i].quality = 0;
  }
};

GildedRose.backstagePasses = function(i){
  if (items[i].sellIn <= 0){
    items[i].quality = 0;
  }
  else if (items[i].sellIn < 6){
    GildedRose.changeQuality(i, 3);
  }
  else if (items[i].sellIn < 11){
    GildedRose.changeQuality(i, 2);
  }
  else{
    GildedRose.changeQuality(i, 1);
  }
};