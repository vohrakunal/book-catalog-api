# Books Catalog API

  

## Creating a working environment

- Clone the API and create the environment `.env`  file by copying the contents of env.example
> Note: replace the values of .env file according to the environment



- To populate Database (books-catalog) either import the mongo dump from `/dump` using 
`$ mongorestore dump --gzip` in the root of the repo or use postman collection and execute addBooksInBatch route `POST:/books/addBooksInBatch`
- npm install : To install required modules

- start application

	- npm run dev (Development mode)

	- npm start (Prod mode)

	- npm build (to create a production build)

  
  

## API Routes

  

### Get Book

  

```http

GET /books/getBookById/:bookId

```

  

### Get all Books

  

```http

GET /books/getAllBooks

```
### Add Book

  

```http

POST /books/addBook

  

body: {

"title": "Book 1" : string,

"year": "2011" : number,

"description" : "all about Book 2" : string

  

}

```

  

### Add Multiple Books

  

```http

POST /books/addBooksInBatch

  

body: {

"books": [

{

"title": "Lucia",

"year": 2007,

"description": "Advanced well-modulated policy"

}, {

"title": "Night Court",

"year": 2006,

"description": "User-centric fresh-thinking initiative"

}, {

...

}]

```

Created By [Kunal Vohra](https://kunalvohra.in)

