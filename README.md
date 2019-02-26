# graphql-starter

This project starter use to make Graphql Server to get data from existing REST API (www.thesportsdb.com)


## Usage

```
git clone https://github.com/arsan-irianto/graphql-starter.git
cd graphql-starter
npm install
node src/index.js

open your GraphQL IDE like GraphQL Playground
```

## Query sample
```
query {
  teams {
    idTeam
    strTeam
    players{
      idTeam
      strPlayer
    }
  }
}

```