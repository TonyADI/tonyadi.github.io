const apiKey = null; //redacted

export const Yelp = {search : function(term, location){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,
    {headers:{Authorization:`Bearer ${apiKey}`}}).then(response => {
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse.businesses ? jsonResponse.businesses.map(business => {
            return {id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    city: business.location.city,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    price: business.price,
                    url: business.url}
             }) : null
        });
    }, 
    autocomplete : function(term){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=${term}`,
    {headers:{Authorization:`Bearer ${apiKey}`}}).then(response => {
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse.terms ? jsonResponse.terms.map(term => {
            return {term: term.text}
             }) : null
        });
    },
    sortBy : function(long, lat, limit, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&limit=${limit}&sort_by=${sortBy}`,
    {headers:{Authorization:`Bearer ${apiKey}`}}).then(response => {
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse.businesses ? jsonResponse.businesses.map(business => {
            return {id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    city: business.location.city,
                    category: business.categories,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    price: business.price,
                    url: business.url}
             }) : null
        });
    }
};