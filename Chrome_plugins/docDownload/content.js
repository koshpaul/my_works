const grabBtn = document.getElementById("dnlBtn");
function sleep() {
  return 0;
}

function sec()
{ 
  chrome.tabs.query({active: true}, function (tabs) {
  var tabUrl = tabs[0].url; 
  function execScript(tab) {
    // Выполнить функцию на странице указанной вкладки
    // и передать результат ее выполнения в функцию onResult
    chrome.scripting.executeScript(
        {
            target:{tabId: tab.id, allFrames: true},
            func:grabImages
        });
  }
  function grabImages() {
//    const images = document.querySelectorAll("iframes");   
    var doct=document.querySelector(".controls-Tabs__item_view_main span span").innerHTML;
    if (doct.length>30) {
      alert(doct);
      var shk=document.querySelector(".page-begin tbody").innerHTML;
      alert(shk);

  }
  }
  if (tabUrl=='https://online.sbis.ru/page/documents-incoming') {
    execScript(tabs[0]);  }
});   
}

grabBtn.addEventListener("click", sec);
