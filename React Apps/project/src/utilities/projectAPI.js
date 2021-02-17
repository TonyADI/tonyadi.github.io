export const authenticate = async (url, data) => {
    try{
        let response = await fetch(url, {method: 'POST', 
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 201){
                console.log('Account created');
                return(true);
            }
            else if(response.status === 204){
                console.log('Login worked!');
                return(true);  // change to numeric values or success/failure string
            }
            else if(response.status === 409){
                console.log('Account already exists!')
                return(false);
            }
            
            else if(response.status === 401){
                console.log('Credentials do not exist.')
                return(false);
            }
        }
        throw new Error('Login failed!');
    }
    catch(error){
        console.log(error)
    }
}


export const deleteData = async (url, data) => {
    try{
        console.log(JSON.stringify(data));
        console.log(url);
        let response = await fetch(url, {method: 'DELETE', headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify(data)});
        if(response.ok){
            console.log("Resource deleted")
            return true;
        }
        throw new Error('Could not establish connectionS')
    }
    catch(error){
        console.log(error);
    }
}


export const retrieveData = async (url, term='') => {
    try{
        let response = await fetch(`${url}/${term}`);
        if(response.ok){
            console.log('Response received')
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
        throw new Error(`Failed to retrieve ${term}`);
    }
    catch(error){
        console.log(error)
    }
}

export const retrieveSecureData = async (url, data) => {
    try{
        console.log(url);
        let response = await fetch(url, {method: 'POST', headers:{'Content-type': 'application/json'}, 
        body: JSON.stringify(data)});
        if(response.ok){
            console.log('Response received');
            if(response.status === 200){
                console.log('Data was successfully retreived')
                let jsonResponse = await response.json();
                return jsonResponse;
            }
        }
        throw new Error('Failed to establish connection');
    }
    catch(error){
        console.log(error)
    }
}

export const createProduct = async (url, data) => {
    try{
        let response = await fetch(url +'/products', {method: 'POST',
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 201){
                console.log('Product created');
                return true;
            }
        }
        throw new Error('Failed to create new product')
    }
    catch(error){
        console.log(error)
    }
}

/*

export const login = async (url, data) => {
    try{
        let response = await fetch(url, {method: 'POST', 
        headers:{'Content-type': 'application/json'}, body: JSON.stringify(data)});
        if(response.ok){
            if(response.status === 204){
                console.log('Login worked!');
                return(true);  // change to numeric values or success/failure string
            }
        }
        if(response.status === 401){
            console.log('Credentials do not exist.')
            return(false);
        }
        throw new Error('Login failed!');
    }
    catch(error){
        console.log(error)
    }
}
*/

/*
export const accountDetails = async url => {
    try{
        let response = await fetch(url, {method: 'GET'})
        if(response.ok){
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
        throw new Error('Account details could not be retreived')
    }
    catch(error){
        console.log(error);
    }
}
*/