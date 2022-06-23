module.exports.readStockData=function () {

    var data = [];

    require('fs').readFileSync('./tsla.csv', 'ascii').split(/\r?\n/).forEach(function(line) {
        var cols=line.split(',');
        var date=cols[0];
        var price=cols[1];

        data.push({date:date,price:price});

});

    return data;

}
