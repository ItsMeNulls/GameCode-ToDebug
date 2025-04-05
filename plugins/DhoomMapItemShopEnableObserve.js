Scene_Map.prototype.onMapItemShopEndMenuObserve = function () {
    $gameTemp._mapItemShopRegisterPos = [$gamePlayer.x, $gamePlayer.y, $gamePlayer.direction()];
    var staffs = $gameParty.mapItemShopStats().staffs.clone();
    var event;
    while (staffs.length > 0 && !event) {
        var id = staffs[Math.randomInt(staffs.length)];
        staffs.splice(staffs.indexOf(id), 1);
        event = $gameMap.itemShopGetStaff(id);
    }
    if (event) {
        event._mapShopStaffRegister = true;
        $gamePlayer._mapItemShopHandlingRegister = false;
    } else if ($gameSwitches.value(75)) { // Set the switch ID here.
        $gamePlayer._mapItemShopHandlingRegister = false;
    }
    this.onMapItemShopEndMenuCancel();
};

Game_Party.prototype.mapItemShopCalculateSoldItems = function () {
    var max = (this.mapItemShopStats().staffs.length + this.mapItemShopStats().advertisement.length) + Math.floor(Math.random() * 2);
    for (var i = 0; i < max; i++) {
        var events = $gameMap.itemShopGetShelfItemEventNoChild();
        var event = events[Math.randomInt(events.length)];
        if (event) {
            var item = event._mapShopShelfItemID;
            this.mapItemShopStats().currentSoldItems.push(item);
            event.clearMapItemShopItem(false);
        }
    }
    var items = $gameParty.mapItemShopStats().currentSoldItems;
    var result = 0;
    for (i = 0; i < items.length; i++) {
        result += $dataItems[items[i]].price;
    }
    this.mapItemShopStats().soldItems = this.mapItemShopStats().soldItems.concat(this.mapItemShopStats().currentSoldItems);
    this.mapItemShopStats().currentSoldGold = result;
    this.mapItemShopStats().extrasProfit = $gameVariables.value(521);
    this.mapItemShopStats().currentCut = Math.round(result * Dhoom.MapItemShop.cutPercentage / 100);
    this.mapItemShopStats().currentStaffCut = Math.round((result - this.mapItemShopStats().currentCut) * Dhoom.MapItemShop.staffPercentage / 100 * $gameParty.mapItemShopStats().staffs.length);
    this.mapItemShopStats().currentProfit = result + this.mapItemShopStats().extrasProfit - this.mapItemShopStats().currentStaffCut - this.mapItemShopStats().currentCut;
    this.mapItemShopStats().totalProfit += this.mapItemShopStats().currentProfit;
    this.mapItemShopStats().soldItemGold += result;
    this.updateMapItemShopVariables();
};