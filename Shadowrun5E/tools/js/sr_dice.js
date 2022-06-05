function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollDice(dice_num) {
    const result_array = [];
    for (let i = 0; i < dice_num; i++) {
        var rand_num = getRndInteger(1, 6);
        result_array.push(rand_num);
    }
    return result_array;
}

function buildDiceBlockHTML(block_id, dice_array) {
    var result_element;
    var left_element;
    var right_element;

    var dice_poll = dice_array.length;
    var hit_num = 0;
    var glitch_num = 0;
    var roll_six_num = 0;
    var glitch_text = "";

    result_element = document.createElement("div");
    result_element.setAttribute("class", "container row p-0 mx-auto my-2");
    result_element.setAttribute("style", "max-width: 800px;");
    result_element.setAttribute("id", "dice_block_id_" + block_id);

    left_element = document.createElement("div");
    left_element.setAttribute("class", "container row col-8 m-0 border");

    for (let i of dice_array) {
        var dice_element = document.createElement("div");
        dice_element.setAttribute("class", "dice-frame");
        var img_element = document.createElement("img");
        img_element.setAttribute("class", "img-fluid");
        img_element.setAttribute("alt", "dice image");
        switch (i) {
            case 0:
                left_element.appendChild(dice_element);
                break;
            case 1:
                img_element.setAttribute("src", "./img/D6-1-red.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                glitch_num++;
                break;
            case 2:
                img_element.setAttribute("src", "./img/D6-2-black.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                break;
            case 3:
                img_element.setAttribute("src", "./img/D6-3-black.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                break;
            case 4:
                img_element.setAttribute("src", "./img/D6-4-black.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                break;
            case 5:
                img_element.setAttribute("src", "./img/D6-5-yellow.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                hit_num++;
                break;
            case 6:
                img_element.setAttribute("src", "./img/D6-6-yellow.png");
                dice_element.appendChild(img_element);
                left_element.appendChild(dice_element);
                hit_num++;
                roll_six_num++;
                break;
        }
    }

    if (glitch_num > dice_poll / 2) {
        if (!hit_num) {
            glitch_text =
                ' -> <span class="text-danger fw-bold">嚴重失誤！</span><br>';
        } else {
            glitch_text =
                ' -> <span class="text-danger fw-bold">失誤！</span><br>';
        }
    }

    info_element = document.createElement("div");
    info_element.setAttribute("class", "my-1");
    info_html =
        '成功數：<span class="text-success fw-bold">' +
        hit_num +
        "</span>／" +
        dice_poll +
        '<br>失誤數：<span class="text-danger fw-bold">' +
        glitch_num +
        "</span>／" +
        dice_poll +
        glitch_text;
    info_element.innerHTML = info_html;

    button_a_element = document.createElement("input");
    button_a_element.setAttribute("type", "button");
    button_a_element.setAttribute("value", "良機再現");
    button_a_element.setAttribute("id", "rule_of_six_btn_id_" + block_id);
    button_a_element.setAttribute("class", "me-1");

    button_b_element = document.createElement("input");
    button_b_element.setAttribute("type", "button");
    button_b_element.setAttribute("value", "爆骰(" + roll_six_num + ")");
    button_b_element.setAttribute("id", "rule_of_six_btn_id_" + block_id);
    button_b_element.setAttribute("class", "me-1");

    right_element = document.createElement("div");
    right_element.setAttribute("class", "col-4 border");
    right_element.appendChild(info_element);
    right_element.appendChild(button_a_element);
    right_element.appendChild(button_b_element);

    result_element.appendChild(left_element);
    result_element.appendChild(right_element);
    return result_element;
}

var block_id = 0;

document.getElementById("roll_btn_id").onclick = function () {
    if (!document.getElementById("input_dice_poll_id").value) {
        alert("請輸入骰池數量");
    } else {
        var dice_poll_num = document.getElementById("input_dice_poll_id").value;
        block_id += 1;
        document.getElementById("show_dice_result_id").appendChild(
            buildDiceBlockHTML(block_id, rollDice(dice_poll_num))
        );
    }
};
