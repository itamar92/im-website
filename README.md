# IM - Website

An e-commerce website project for a music library.

## About the Project

This project is a demo website for an e-commerce website. In this project, I had to implement all the functionality and visualization of the Front-end side that we've learned.

As a music producer and a composer, I choose to build a site involving music.
All of the music on this site is an original creation of mine.

## Methods used

This Project support CRUD Functionality (Create, Read, Update, Delete ).
You can create a product, update an existing one and you can Delete a product.

All the Data is stored locally on the Public folder and updated in the localStorage for controlling the rendered products and login
The project uses "Fetch" method to demo a server call using "Get" or "post" methods.
To achieve this I had to use the JSON-server module which simulates a call to an API of a server.

The project includes a Header, Footer, and Navbar with links to the different pages.
There is also a Search Bar in the header to search specific items and apply an autocomplete to help the user find more easily the product that he is searching for.

The methods that are used are:

React-Router - To navigate between the pages

useContext - To control all the data and Crud functions in one place.

Portalpage - to show the Login Form above any page

ProtectedRoutes - to protect specific rout from unauthorized users

useState and useEffect.

In the project, I used a combination of CSS and Material UI to design the UI and UX.
Also

## How to Use

First, you need to download the git folder to your computer.
then, run :

```bash
npm i
```

to build the dependency.

The next step is to run:

```bash
json-server data/db.json --watch --port=5000
```

for the Server Call.

\*if the built of the json-server failed locally, you will need to install it global

```bash
npm install -g json-server
```

## Usage

The site has two types of clients: Users and Admin.

A user is a regular client that can collect products in his cart, place an order and go to checkout.

An Admin can edit the products page - edit an existing product or adding a new one,
and also view the global orders list of all the orders. all those functions are only available for the Admin.

To start - use the demo user or admin to log in:
User-
email: user@gmail.com
password: user123

Admin-
email: admin@gmail.com
password: admin123

## Conclustion

During my work on the project, I discovered different methods of code and different approaches to implementing them.
The code has undergone many changes since its inception and various approach combinations.
At first, I relied only on using CSS but later I discovered the benefits of working with libraries like Material UI and bootstrap.
If I had started the project all over again my approach would have been from the beginning to work with these libraries and working with custom hooks for a more orderly and readable project.
