let select_Json = Cookies.get(`user_selection`);
if (select_Json === undefined) {
    console.log(`error`)
}
let selection_Data = JSON.parse(select_Json);
document.body.insertAdjacentHTML(`beforeend`, `<section>

    <img src="${selection_Data[`image_url`]}" >
    <h1>${selection_Data[`title`]}</h1>
    <p>${selection_Data[`description`]}</p>
    <h4>${selection_Data[`price`]}</h4>
</section>`);