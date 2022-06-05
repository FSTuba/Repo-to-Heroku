function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(dice_num) {
    const result_array = [];
    for (let i=0; i<dice_num; i++){
        var rand_num = getRndInteger(1,6);
        result_array.push(rand_num);
    }
    return result_array;
}

function buildDiceBlockHTML(block_id, dice_array){
    //這邊不能直接把HTML用字串塞進去，要一個一個加node

    var result_text = "";
    result_text += '<div class="container row col-8 m-0 border" id="dice_block_id_' + block_id + '">'
    for (let i of dice_array){
        switch(i){
            case 0:
                result_text += '<div class="dice-frame"></div>';
                break;
            case 1:
                result_text += '<div class="dice-frame"><img src="./img/D6-1-red.png" alt="dice image" class="img-fluid"></div>';
                break;
            case 2:
                result_text += '<div class="dice-frame"><img src="./img/D6-2-black.png" alt="dice image" class="img-fluid"></div>';
                break;
            case 3:
                result_text += '<div class="dice-frame"><img src="./img/D6-3-black.png" alt="dice image" class="img-fluid"></div>';
                break;
            case 4:
                result_text += '<div class="dice-frame"><img src="./img/D6-4-black.png" alt="dice image" class="img-fluid"></div>';
                break;
            case 5:
                result_text += '<div class="dice-frame"><img src="./img/D6-5-yellow.png" alt="dice image" class="img-fluid"></div>';
                break;
            case 6:
                result_text += '<div class="dice-frame"><img src="./img/D6-6-yellow.png" alt="dice image" class="img-fluid"></div>';
                break;
        }
    }
    result_text += '</div>'

    return result_text;
}

var block_id = 0;

document.getElementById("roll_btn_id").onclick = function(){
    block_id += 1;
    const text_node = document.createTextNode(buildDiceBlockHTML(block_id,rollDice(5)))
    document.body.appendChild(text_node);
    console.log("hi");
}


