"use strict";
/*
const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];


const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);



const [first] = books;
const { author, title, ISBN } = first;
console.log(author, title, ISBN);

// const { title, author, ISBN } = books[0];
// console.log(author, title, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { programmingLanguage = "unknown", language } = books[6];

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookAuthor, bookTitle);


const [bookRating] = books;

const {
  thirdParty: {
    goodreads: { rating },
  },
} = bookRating;
console.log(rating);

const printBookInfo = function (title, author, year = "year unknown") {
  console.log(`${this.title} by ${this.author}, ${this.year}`);
};



const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (name) {
  console.log(...name);
};

spellWord("JavaScript");

const { mainKeyword, ...rest } = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`he book "${title}" has ${authors.length} authors`);
};
printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

const hasExamplesInJava = function (obj) {
  return obj.programmingLanguage === "Java" || "no data available";
};

console.log("----------------------------------------");
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}

console.log("----------------------------------------");

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title} provides no data about its online content"`
    );
}

*/

// for (const book of books) {
//   book.edition ||= 1;
// }

// for (const book of books) {
//   book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.5);
// }

// let pageSum = 0;

// for (const p of books) {
//   pageSum += p.pages;
// }
// console.log(pageSum);

// const allAuthors = [];

// for (const auth of books) {
//   if (typeof auth.author === "string") allAuthors.push(auth.author);
//   else {
//     allAuthors.push(...auth.author);
//   }
// }

// console.log(allAuthors);

// for (const [idx, value] of allAuthors.entries()) {
//   console.log(`${idx + 1}  : ${value}`);
// }

// const bookData = [
//   ["title", "Computer Networking: A Top-Down Approach"],
//   ["author", ["James F. Kurose", "Keith W. Ross"]],
//   ["publisher", "Addison Wesley"],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// const pages = 880;
// const newBook2 = {
//   title: "The C Programming Language",
//   author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
//   pages,
// };

// const getFirstKeyword = function (obj) {
//   const key = obj.keywords?.[0];
//   console.log(key);
// };

// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2);

// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// for (const [idx, [key, value]] of Object.entries(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   if (key === entries[idx][0]) entries[idx][1] = value;
// }

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }
// console.log(entries);

// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// const allKeywords = [];

// for (const key of books) allKeywords.push(...key.keywords);
// console.log(allKeywords);

// const allKeywordsUnique = new Set(allKeywords);
// allKeywordsUnique.add("coding");
// allKeywordsUnique.add("science");
// allKeywordsUnique.delete("business");
// console.log(allKeywordsUnique);

// const uniqueKeywordsArr = [...allKeywordsUnique];
// allKeywordsUnique.clear();
// console.log(allKeywordsUnique);
// console.log(uniqueKeywordsArr);

// const bookMap = new Map([
//   ["title", "Clean Code"],
//   ["author", "Robert C. Martin"],
// ]);
// bookMap.set("pages", 464);
// console.log(bookMap);

// const title = bookMap.get("title");
// const author = bookMap.get("author");
// console.log(`${title} by ${author}`);

// console.log(bookMap.size);

// bookMap.has("author") && console.log("The author is known");

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// for (const [key, value] of firstBookMap) {
//   if (typeof value == "number") console.log(key, value);
// }
