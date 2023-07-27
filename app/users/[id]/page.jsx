
async function getUser(id){
  console.log(id)
  const users = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await users.json()
  return data.data
}

async function UsersPage({params}) {

   const data = await getUser(params.id)
   console.log(data)

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={data.avatar} alt={data.email}/>
          </div>
          <div className="card-body text-center">
              <h3>{data.id} {data.first_name} {data.last_name}</h3>
                <p>{data.email}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default UsersPage