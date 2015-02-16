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
    switch (checkCategory(items[i].name)){
      case "A"{
        changeQuality(i, 1);
        break;
      }
      case "B"{
        if (item[i].sellIn <= 0)
          item[i].quality = 0;
        else if (item[i].sellIn < 6)
          changeQuality(i, 3);
        else if (item[i].sellIn < 11){
          changeQuality(i, 2);
        }
        else{
          changeQuality(i, 1);
        }
        break;
      }
      case "C"{
        changeQuality(i, -2);
        break;
      }
      case "S"{
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

GildedRose.checkCategory = function(name){
  if (nameCheck(name, "Aged Brie"))
    return "A";
  else if (nameCheck(name, "Backstage passes"))
    return "B";
  else if (nameCheck(name, "Conjured"))
    return "C";
  else if (nameCheck(name, "Sulfuras"))
    return "S";
  else
    return;
};

GildedRose.nameCheck = function(name, str){
  return name.indexOf(str) > -1;
};

GildedRose.changeQuality = function(i, rate){
  if (items[i].quality <= 50 && items[i].quality > 0){
    items[i].quality = items[i].quality + rate;
  }
};