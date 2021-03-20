// reqest https://api.github.com/search/repositories?q=something
// process result
// insert to database

const { Repos } = require('./repositories/repositories-model');

// axios

async function requestRepos() {
  // ..
  return repos
}

function processRepos(repos) {
  const mappedRepos = repos.map(repo => ({
    name: repo.name,
    desc: repo.desc,
  })) // ...
  return mappedRepos;
}

async function saveRepos(mappedRepos) {
  // save
}

(async () => {
  await openDbConenction();

  const repos = await requestRepos();

  const mappedRepos = processRepos(repos);

  await saveRepos(mappedRepos)
})()


Repo

['test', 'something', ]

function cacheData() {
  MongoRepoModel.count()
    .then(count => {
      Redis.set('count', count)
    })
}

Redis.set('age', 30)


app.get('/repo/count', (req, res) => {
  Redis.get('count', count)

  client.get("key", () => {
    res.send(4) // ..
  });
  
})

app.listen(3000, () => {
  cacheData()
})

RAM count 4

