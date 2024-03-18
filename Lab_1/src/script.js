let model = {
    artists: [
        {
            name: "Ariana Grande",
            birth: "June 26, 1993",
            gender: "Female",
            listeners: "3.2 millions",
            songs: [
                {title: "we can't be friends"},
                {title: "the boy is mine"},
                {title: "bye"},
                {title: "yes, and?"},
                {title: "eternal sunshine"},
            ],
        },
        {
            name: "Taylor Swift",
            birth: "December 13, 1989",
            gender: "Female",
            listeners: "4.5 millions",
            songs: [
                {title: "Cruel Summer"},
                {title: "Now That We Don't Talk"},
                {title: "cardigan"},
                {title: "Is It Over Now?"},
                {title: "Slut!"},
            ],
        },
        {
            name: "Drake",
            birth: "October 24, 1986",
            gender: "Male",
            listeners: "5.4 millions",
            songs: [
                {title: "Passionfruit"},
                {title: "IDGAF (feat. Yeat)"},
                {title: "One Dance"},
                {title: "Rich Baby Daddy (feat. Sexyy Red & SZA)"},
                {title: "Jimmy Cooks (feat. 21 Savage)"},
            ],
        },
        {
            name: "Lana Del Rey",
            birth: "June 21, 1985",
            gender: "Female",
            listeners: "3.9 millions",
            songs: [
                {title: "Let the Light In (feat. Father John Misty)"},
                {title: "West Coast"},
                {title: "Cinnamon Girl"},
                {title: "Say Yes to Heaven"},
                {title: "Summertime Sadness"},
            ],
        },
        {
            name: "Tyler, the Creator",
            birth: "March 6, 1991",
            gender: "Male",
            listeners: "2.8 millions",
            songs: [
                {title: "EARFQUAKE"},
                {title: "BEST INTEREST"},
                {title: "NEW MAGIC WAND"},
                {title: "ARE WE STILL FRIENDS?"},
                {title: "WUSYANAME"},
            ],
        },
    ],
    genders: ["Any", "Male", "Female"],
    filterGender: "Any",
    filteredArtists: []
};

let myApp = angular.module("Lab1", []);
myApp.controller("artistsController", function ($scope) {
    $scope.artists = model.artists;
    $scope.genders = model.genders;
    $scope.filterGender = model.filterGender;
    $scope.filteredArtists = model.filteredArtists;

    $scope.filterArtists = function (gender) {
        $scope.filterGender = gender;
        $scope.filteredArtists = $scope.artists
            .filter(artist => gender === "Any" || artist.gender === gender);
    };

    $scope.init = function () {
        $scope.filteredArtists = $scope.artists;
    };
});
