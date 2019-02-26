const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const urlLookupLeague = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
const urlPlayers = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=`

const typeDefs = `
type Query {
  teams: [Team!]!
  players(id: ID!): [Player!]!
}
type Team {
  idTeam: ID!
  strTeam: String!
  players: [Player]
}
type Player {
  idTeam: ID!
  strPlayer: String!
}
`
const resolvers = {
  Query: {
    teams: () => {
      return fetch(`${urlLookupLeague}`).then(res => res.json()).then(res => res.teams)
    }
  },
  Team: {
    players: parent =>  {
      return fetch(`${urlPlayers}${parent.idTeam}`).then(res => res.json()).then(res => res.player)
    }
  }
}
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server Running on http://localhost:4000`))