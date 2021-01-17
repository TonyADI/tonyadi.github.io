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
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    price: business.price,
                    url: business.url}
             }) : null
        });
    }, 
    autocomplete : function(term){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete?text=${term}&latitude=37.786882&longitude=-122.399972`,
    {headers:{Authorization:`Bearer ${apiKey}`}}).then(response => {
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse.terms ? jsonResponse.terms.map(term => {
            return {term: term.text}
             }) : null
        });
    }
};