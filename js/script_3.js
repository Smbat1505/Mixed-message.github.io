/*jslint maxlen: 500 */
const generator = {
    init: function () {

        let elem = document.getElementById('input');
        let obj = this;
        let button = document.getElementById('btn');
        button.addEventListener('click', function () {
            elem.innerText = obj.generateInsult();
            document.getElementById('input').style.display = 'block';
            document.getElementById('tablo').style.display = 'block';
            document.querySelector('section').style.display = 'none';
            document.getElementById('glas').style.display = 'none';
            document.getElementById('result').innerHTML = 'try again';
        });
    },

    generateInsult: (function () {
        let generateInsult = function () {
            return weatherForToday[random(weatherForToday)] + whatToWearToday[random(whatToWearToday)] + whereToGoForAWalk[random(whereToGoForAWalk)];
        };
        document.getElementById('input').style.display = 'none';
        document.getElementById('tablo').style.display = 'none';
        document.querySelector('section').style.display = 'block';
        document.getElementById('glas').style.display = 'block';
        function random(arr) {
            return Math.floor(Math.random() * weatherForToday.length);
        }

        const weatherForToday = ['it\`s a beautiful day:\n', 'it\`s a cloudy day:\n', 'it\`s a rainy day:\n', 'it\`s a cold day:\n']; // jshint ignore:line
        const whatToWearToday = ['Since you can dress warmly for summer!\n', 'It\`s cloudy outside, it\`s better to wear a rug.\n', 'It\`s raining outside, bring an umbrella!\n', 'It\`s cold outside, dress warmer.\n']; // jshint ignore:line
        const whereToGoForAWalk = ['You can go into nature\n', 'You can go to the movies\n', 'You can go to a restaurant\n', 'You\`d better not leave the house!\n']; // jshint ignore:line
        return generateInsult;
    }()),
};

generator.init();