const a_array = [1];

function test_aaa(){
    a_array.push(2)
    console.log(a_array);
}
test_aaa();
console.log(a_array);
a_array[10] = 10;
console.log(a_array);
document.getElementById("eating_memo_of_this_doc_id").textContent = "本文檔食用指南AAA";