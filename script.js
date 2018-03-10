function getNames(query) {
    var ucQuery = query.toUpperCase();
    return SampleData.filter((val) => {
        if (val.toUpperCase().indexOf(ucQuery) >= 0) return val;
    });
}

var SampleData = ["Arlette Steil", "Sherlyn Valentin", "Lauri Tutor", "Jennette Kersten", "Eladia Godbold", "Sarah Renna", "Stuart Sword", "Charla Mclean",
    "Renee Sprouse", "Olinda Pew", "Ivette Steinberger", "Elizabeth Dew", "Francisco Elsberry", "Maryetta Richards", "Shantae Mizzell", "Cyndy Heenan", "Cherri Sutton",
    "Stacey Rosson", "Dara Monaghan", "Victorina Nastasi", "Sook Drozd", "Ginger Elton", "Stefani Grimm", "Sherly Decelles", "Treva Silguero", "Roxanne Shankles",
    "Jacinta Lagrange", "Clorinda Etienne", "Xiao Chew", "Lavonna Meidinger", "Cheryle Kampf", "Charmaine Enz", "Libby Flinchbaugh", "Anja Brickner", "Matha Pickell",
    "Zoila Napier", "Janell Limon", "Aundrea Koga", "Jude Sturm", "Emile Pane", "Eunice Koh", "Carmen Knights", "Hayden Spradley", "Avery Struthers", "Sheri Tower",
    "Xavier Keener", "Paz Reinhardt", "Magaret Caiazzo", "Valentina Eggers", "Soon Durand"
];

document.addEventListener("DOMContentLoaded", function () {

    var input = document.querySelector("input");
    var pm = new PredictiveMemoizer();
    pm.addSet("", SampleData);


    input.addEventListener("input", function () {
        var existing = pm.getPredictions(this.value);
        console.log(existing);
    });
});