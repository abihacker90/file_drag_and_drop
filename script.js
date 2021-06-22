const elements = {};

function fileAdded(e) {
    document.querySelector("#upload h3").innerHTML = e.target.files[0].name; //writing out the uploaded file name//
    console.log(e.target.files[0].name);

};

function _load() {
    const rootElement = document.getElementById('root');


    rootElement.insertAdjacentHTML("beforebegin", `
    <div id="upload">
        <input id="fileInp" type="file">
        <h3>Drop here!</h3>
    </div>
`)
    elements.uploadE = document.querySelector("#upload");
    elements.inputE = document.querySelector("#fileInp");


    elements.inputE.addEventListener("change", fileAdded);


}
window.addEventListener("load", _load);