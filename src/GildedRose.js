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
    switch (true){
      case nameCheck(i, "Aged Brie"){
        changeQuality(i, 1);
        break;
      }
      case nameCheck(i, "Backstage passes"){
        backstagePasses(i);
        break;
      }
      case nameCheck(i, "Conjured"){
        changeQuality(i, -2);
        break;
      }
      case nameCheck(i, "Sulfuras"){
        break;
      }
      default{
        changeQuality(i, -1);
        break;
      }
    }
  }
  return items;
};

GildedRose.nameCheck = function(i, str){
  return item[i].name.indexOf(str) > -1;
};

GildedRose.changeQuality = function(i, rate){
  if (items[i].quality <= 50 && items[i].quality > 0){
    items[i].quality += rate;
  }
};

GildedRose.backstagePasses = function(i){
  if (item[i].sellIn <= 0)
    item[i].quality = 0;
  else if (item[i].sellIn < 6)
    changeQuality(i, 3);
  else if (item[i].sellIn < 11)
    changeQuality(i, 2);
  else{
    changeQuality(i, 1);
  }
};