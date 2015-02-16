var Item = function (name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;

  this.category = function(){
    if (this.nameCheck("Aged Brie")){
      return "agedBrie";
    }
    else if (this.nameCheck("Backstage passes")){
      return "backstagePasses";
    }
    else if (this.nameCheck("Conjured")){
      return "conjured";
    }
    else if (this.nameCheck("Sulfuras")){
      return "sulfuras";
    }
    else {
      return "normal";
    }
  }

  this.nameCheck = function(str){
    return this.name.indexOf(str) > -1;
  };

  this.changeQuality = function(rate){
    this.quality += rate;
  };

  this.adjustQuality = function(value){
    this.quality = value;
  };

  this.qualitySurpassMax = function(){
    return this.quality > 50;
  };

  this.qualitySurpassMin = function(){
    return this.quality < 0;
  };
};