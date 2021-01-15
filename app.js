(function() {
  angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController )
.service('MenuSearchService',MenuSearchService)
//




NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService,$scope){
//$scope.Tobuyvar showlist=this;List=TobuyList;
var showlist=this;
var allmenu=MenuSearchService.getallMenu();
showlist.MatchedList=[];
allmenu.then(function(response){

  showlist.alldata=response.data;

}).catch(function(error){});


showlist.checkMenu=function()
{
showlist.MatchedList=[];
  angular.forEach(showlist.alldata.menu_items, function (value, key) {

    if(value.description.indexOf(showlist.searchmenu)>0)
    {
      showlist.MatchedList.push(value);
    }

            });




}
showlist.remove=function(item)
{
  showlist.MatchedList.splice(showlist.MatchedList.indexOf(item),1);
}

}




MenuSearchService.$inject = ['$http'];
function MenuSearchService($http)
{
var service=this;
var items=[];
service.getallMenu=function()
{
   var response=$http({
     method:"GET",
     url:("http://davids-restaurant.herokuapp.com/menu_items.json")

   });
return response;
  };

}
// service.getItems=function()
// {
//   return items;
// }
// service.removeItems=function(itemindex)
// {
//   listitem.splice(listitem.indexOf(itemindex),1);
//   return listitem;
// }

})();