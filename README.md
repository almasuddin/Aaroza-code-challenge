# Aaroza-code-challenge
Some simple API tasks for demonstrating HTTP, Node.js and general API practices

# Pre-requisite
Make sure that `Node.js` and `MongoDB` is installed on your machine.
## Step 1: Install
Download this project to your machine. Using git bash you can clone this project. The command is following:
```
git clone https://github.com/almasuddin/Aaroza-code-challenge.git
```
## Step 2: Run the test
Go to root of `Aaroza-code-challenge` directory and run the following command:
```
node code_challenge.js
```

# Test the APIs
Assume that host means `http://localhost:5000`. Test APIs using `Postman`

### API Task 1
GET - `http://localhost:5000/api/actors`
Output will be like:
```js
[
    {
        "name": "Humayun Faridi",
        "birthday": "May 29, 1952",
        "country": "Bangladesh"
    },
    {
        "name": "Zahid Hasan",
        "birthday": "October 4, 1965",
        "country": "Bangladesh"
    },
    {
        "name": "Asaduzzaman Noor",
        "birthday": "October 31, 1946",
        "country": "Bangladesh"
    }
]
```

### API Task 2
POST - `http://localhost:5000/api/user/signup`
In the body use following codes:
```js
{
    "username": "Ahmed Ali",
    "password": "May291952"
}
```
Output will be like:
```js
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFobWVkIEFsaSIsImlhdCI6MTU3MTE5NzA4MH0.8VwFIZ7HJVwtrfVApgO7obhPnyw8cqcR0qQyjbqNWKI"
}
```
Again use the same following code:
```js
{
    "username": "Ahmed Ali",
    "password": "May291952"
}
```
Now output will be like:
```js
user already exists
```

### API Task 3
POST - `http://localhost:5000/api/user/login`
In the body use following codes:
```js
{
    "username": "Ahmed Ali",
    "password": "May291952"
}
```
Output will be like:
```js
{
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFobWVkIEFsaSIsImlhdCI6MTU3MTE5NzM1MH0.g4L7UqbE1urL5fsacTchVgMpjapCj2qgM2NjAn8BtLk
}
```
### API Task 4
GET - `http://localhost:5000/api/movies`
Add `auth-token` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFobWVkIEFsaSIsImlhdCI6MTU3MTE5NzM1MH0.g4L7UqbE1urL5fsacTchVgMpjapCj2qgM2NjAn8BtLk` and run
Output will be like:
```js
[
    {
        "title": "Aynabaji",
        "year": "2016",
        "rating": "8.1",
        "actors": [
            {
                "name": "Chanchal Chowdhury",
                "birthday": "01 January, 1970",
                "country": "Bangladesh"
            },
            {
                "name": "Partha Barua",
                "birthday": "01 January, 1971",
                "country": "Bangladesh"
            }
        ]
    }
]
```
Again run without `auth-token` of invalid `auth-token`. Output will be like:
```js
Invalid token
```
