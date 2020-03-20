var movie = 12000;
var stage = 8000;

if (movie < stage){
	alert('映画は演劇より安い');
}
else if(movie == stage){
	alert('映画と演劇の値段は同じ');
}
else{
	alert('そんなことほぼないけど演劇の方が安いよ');
}

var int1 = 1;
var int2 = 2;
var sum = int1 + int2;

alert(int1 + '+' + int2 + '=' + sum);



var alertName;
alertName = addName("Maki");

alert(alertName);

function addName(nameA){
	var addNa = "Hello ," + nameA
	return addNa;
}

var promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);






// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != 'グー')&&(user_hand != 'チョキ')&&(user_hand !='パー')&&(user_hand != null)){
	alert('グー・チョキ・パーのいずれかを入力してください');
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}


// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
if(user_hand != null){
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
	alert('また遊んでね！');
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
    return winLoseStr;
}