async function login(){
  try {
    
    const response = await fetch('https://dummyjson.com/user/login', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       
       username: 'emilys',
       password: 'emilyspass',
       expiresInMins: 30, // optional, defaults to 60
     })
   })
    const data = await response.json()
    if (!response.ok){
     throw new Error('Fetching failed: ' + response.message)
    }
 
    console.log(data)

  } catch (error) {
    console.log(error)
  }

}

login()