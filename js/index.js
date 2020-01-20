function addItem(){
    
    //let form = $('.formElement');
    $('.formElement').on('submit', function(e){
        let itemV = $('.itemText').val();
       // console.log("hola");
        e.preventDefault();
        if(itemV !== ""){
            //<p class="textLineThrough">${itemV}</p>
            $('.itemsList').append(
                `<li class="item">
                    
                    <span class="textFormat">${itemV}</span>  
                    <div class="buttonContainer">
                        <button class="check" type="submit">check </button>
                        <button class="delete" type="submit">delete </button>
                    </div>
                </li>`);
        }        
        
    });

}
function checkItem(){
    let normalText = $('.textFormat');
    $('.itemsList').on('click', '.check', function(e){
        console.log("hola");
        let textItem = $(this).parent().parent().find("span");
        textItem.toggleClass("textCross");
        
    });
}

function deleteItem(){
    // let deleteButton = $('.delete');
    $('.itemsList').on('click', '.delete', function(e){
        let currentItem = $(this).parent().parent();
        currentItem.remove();

    });

}

function init(){
    addItem();
    checkItem();
    deleteItem();
}

init();