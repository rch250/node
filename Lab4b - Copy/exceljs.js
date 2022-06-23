var excel = require('exceljs');

var data = [
    {
        rank: "1",
        year: "1967",
        title: "Sgt Pepper Lonely Heart's Club",
        artist: "The Beatles"
    },
    {
        rank: "2",
        year: "1968",
        title: "Pet Sounds",
        artist: "The Beach Boys"
    },
    {
        rank: "3",
        year: "1968",
        title: "Revolver",
        artist: "The Beatles"
    },
    {
        rank: "4",
        year: "1965",
        title: "Highway 65 Revisted",
        artist: "The Beatles"
    },
    {
        rank: "5",
        year: "1965",
        title: "Rubber Soul",
        artist: "The Beatles"
    },
    {
        rank: "5",
        year: "1965",
        title: "Rubber Soul",
        artist: "The Beatles"
    },
    {
        rank: "6",
        year: "1971",
        title: "What's going on",
        artist: "Marvin Gay"
    },
    {
        rank: "7",
        year: "1972",
        title: "Exile on Main Street",
        artist: "The Rolling Stones"
    },
    {
        rank: "8",
        year: "1979",
        title: "London Calling",
        artist: "The Clash"
    },
    {
        rank: "9",
        year: "1966",
        title: "Blonde on Blonde",
        artist: "Bob Dylan"
    },
    {
        rank: "10",
        year: "1966",
        title: "The Beatles(The White Album)",
        artist: "The Beatles"
    },
];

var workbook = new excel.Workbook;

var worksheet = workbook.addWorksheet('Top10', {
    pageSetup:{paperSize: 9, orientation:'portrait'}
});

worksheet.columns = [
    {header: 'Rank', key : 'rank'},
    {header: 'Year', key: 'year'},
    {header: 'Title', key: 'title'},
    {header: 'Artist', key: 'artist'},
];

worksheet.addRows(data);

worksheet.pageSetup.margins = {
    left: 0.7, right: 0.7,
    top: 0.75, bottom: 0.75,
    header: 0.3, footer: 0.3
};

workbook.xlsx.writeFile('Top Albums.xlsx');

console.log('File is Written');

