var area = [
    ["重庆", "四川", "上海","哈尔滨"],
    ["东京", "大阪","北海道","名古屋"],
    ["洛杉矶", "纽约","夏威夷","旧金山"],
    ["圣彼得堡", "莫斯科","喀山","诺夫哥罗德"]
  ];
function changeSelect() {
    var selectCoutry = document.form1.country;
    var selectCity = document.form1.city;
    var countryArea = area[selectCoutry.selectedIndex - 1];
    selectCity.length = 1;
    for(var i=0; i < countryArea.length; i++){
      selectCity[i+1] = new Option(countryArea[i],countryArea[i]);
    }
}
