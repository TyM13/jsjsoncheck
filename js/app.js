let selection ={
    title: `the title`,
    price: 40000,
    image_url: `https://images.unsplash.com/photo-1658370455042-234e0bdb9ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
    description: `description`
};

let selection_Json = JSON.stringify(selection);
Cookies.set(`user_selection`, selection_Json);
location.href = `selection.html`