const readXlsxFile = require('read-excel-file/node');

readXlsxFile('Top Albums.xlsx').then((rows) => {
   for (i=0;i<rows.length;i++) {
       console.log(rows[i]);
   }
})

const schema = {
    'Rank': {
        prop: 'rank',
        type: Number
        },
    'Year': {
        prop: 'year',
        type: Number
    },
    'Title': {
        prop: 'title',
        type: String
    },
    'Artist': {
        prop: 'artist',
        type: String
    }
}

readXlsxFile('Top Albums.xlsx', {schema}).then(({rows, errors}) => {
    console.log(rows);
})

