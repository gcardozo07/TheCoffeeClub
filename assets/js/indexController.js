var app = angular.module('indexApp', []);

app.controller('indexController', function($scope) {
    $scope.tab = 1;
    if ($scope.tab === 1) {
        $('i',this).addClass('showthem')
    }
    $scope.selectedTab = function(setTab) {
        $scope.tab = setTab;
        
        if (setTab === 1) {
            $('.basics').show('slow');
            $('.syndication').hide('slow');
            $('.connectandwin').hide('slow');
            $('.pmc').hide('slow');

        }
        if (setTab === 2) {
            $('.syndication').show('slow');
            $('.basics').hide('slow');
            $('.connectandwin').hide('slow');
            $('.pmc').hide('slow');

        }
        if (setTab === 3) {
            $('.connectandwin').show('slow');
            $('.syndication').hide('slow');
            $('.basics').hide('slow');
            $('.pmc').hide('slow');


        }
        if (setTab === 4) {
            $('.pmc').show('slow');
            $('.connectandwin').hide('slow');
            $('.syndication').hide('slow');
            $('.basics').hide('slow');

        }
    };
    
    $scope.isSelected = function(checkTab) {
        return $scope.tab === checkTab;
    };
    
    
});

