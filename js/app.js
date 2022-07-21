let selection ={
    title: `the title`,
    price: 20,
    image_url: `https://www.google.com`,
    description: `description`
};

let selection_Json = JSON.stringify(selection);
Cookies.set(`user_selection`, selection_Json);