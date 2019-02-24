const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const restApi = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`

const typeDefs = `
  type Query {
    teams: [Team!]!
  }
  type Team{
    idTeam: String
    strTeam: String
    intFormedYear: String
  }
`
function getTeams() {
  return fetch(`${restApi}`).then(res => res.json()).then(res => res.teams)
}

const resolvers = {
  Query:{
    teams: () => getTeams()
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server Running on http://localhost:4000`))



