export const register = async (url, data) => {
    console.log('Initiating connection')
    try{
        console.log(JSON.stringify(data));
        console.log(url);
        let response = await fetch(url, {method: 'POST', 
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 204){
                console.log('Account created');
                return(true);
            }
        }
        if(response.status === 409){
            console.log('Account already exists!')
        }
        throw new Error('Request failed, account was not created')
    }
    catch(error){
        console.log(error)
    }
}

export const login = async (url, data) => {
    try{
        console.log(JSON.stringify(data));
        let response = await fetch(url, {method: 'POST', 
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 204){
                console.log('Login worked!');
                return(true);
            }
        }
        if(response.status === 401){
            console.log('Credentials do not exist.')
        }
        throw new Error('Login failed!')
    }
    catch(error){
        console.log(error)
    }
}

export const sell = async (url, data) => {
    try{
        let response = await fetch(url, {method: 'POST', body: JSON.stringify(data)})
        if(response.ok){
            let jsonResponse = response.json();
            return jsonResponse;
        }
        throw new Error('Sell Request Failed')
    }
    catch(error){
        console.log(error)
    }
}