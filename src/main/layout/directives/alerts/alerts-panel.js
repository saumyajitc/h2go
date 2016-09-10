import angular from 'angular';

function acAlertsPanel($compile) {

    require('./alerts-panel.scss');
    return {
        restrict: 'A',
        transclude: true,
        scope: {},
        template: require('./partials/panel.html'),
        link: function (scope, elem, attr) {

             scope.alerts = [{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1472759354000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1472759354000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1472759354000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1472759354000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1480726923000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1480726923000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1480726923000),typeId:pickRandom("ids"),priority:pickRandom("priority")},{title:pickRandom("title"),target:"Buy IBM.L",value:"25%",portfolios:_.random(2,20),date:new Date(1480726923000),typeId:pickRandom("ids"),priority:pickRandom("priority")}]
            
            
             // add alert count badge and ability to open/close panel to the parent item
            let badge = angular.element($compile('<span style="color: black" class="badge">{{alerts.length}}</span>')(scope));
            let parent = angular.element(elem.children()[0])
            parent.append(badge);
            parent.bind('click', applyShowAlerts);

            //init stuff
            let panelOpen = false;
            let sortedAlerts = sortAlerts(scope.alerts);
            

            //scope
            scope.showAlerts = function showAlerts(){
                panelOpen = !panelOpen;
            };
            
            scope.showPanel = function showPanel(){
                return panelOpen;
            };

            scope.alertsCount = function alertsCount(){
                return scope.alerts.length;
            };

            scope.sortedAlerts = sortedAlerts;

            scope.toDate = function toDate(str){
                return new Date(str);
            };

            
            // functions


            function applyShowAlerts(){
                scope.$apply(scope.showAlerts);
            }
            

            function sortAlerts(alerts){
                let group = _.groupBy(alerts, function(i){
                    return i.date;
                });
                return group;
            }
            
            //TODO - HELPERS, REMOVE THESE
            function pickRandom(type){
                let arrays = {
                ids: ["1", "2", "3", "4", "5", "buy", "sell"],
                priority: [true, false, false, false, false, false],
                title: ["Corporate Action", "Buy", "Sell", "Performance", "Stop Loss", "Take Profit"]
                }
                return arrays[type][_.random(arrays[type].length-1)]
            }

            // // TODO - REMOVE THESE
            // function randomDate(start, end) {
            //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            // }
            // // TODO - REMOVE THESE
            // function showToast(){
            //     console.log("test")
            //     this.toastr.success({
            //     title: this.pickRandom("title"),
            //     target: "Buy IBM.L", 
            //     value: "25%",
            //     portfolios: _.random(2, 20),
            //     date: this.randomDate(new Date(2015, 0, 1), new Date()),
            //     typeId: this.pickRandom("ids"),
            //     priority: this.pickRandom("priority")
            //     });
            // }
                        
        }
    };
}

export default angular.module('directives.acAlertsPanel', [])
    .directive('acAlertsPanel', acAlertsPanel)
    .name;