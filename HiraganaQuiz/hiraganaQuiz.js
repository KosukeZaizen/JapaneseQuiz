document.getElementById("disp0").style.display="none";

var list1 = {a:'あ', i:'い', u:'う', e:'え', o:'お', ka:'か', ki:'き', ku:'く', ke:'け', ko:'こ', sa:'さ', shi:'し', su:'す', se:'せ', so:'そ', ta:'た', chi:'ち', tsu:'つ', te:'て', to:'と', na:'な', ni:'に', nu:'ぬ', ne:'ね', no:'の', ha:'は', hi:'ひ', fu:'ふ', he:'へ', ho:'ほ', ma:'ま', mi:'み', mu:'む', me:'め', mo:'も', ya:'や', yu:'ゆ', yo:'よ', ra:'ら', ri:'り', ru:'る', re:'れ', ro:'ろ', wa:'わ', wo:'を', n:'ん', ga:'が', gi:'ぎ', gu:'ぐ', ge:'げ', go:'ご', za:'ざ', ji:'じ', zu:'ず', ze:'ぜ', zo:'ぞ', da:'だ', de:'で', do:'ど', ba:'ば', bi:'び', bu:'ぶ', be:'べ', bo:'ぼ', pa:'ぱ', pi:'ぴ', pu:'ぷ', pe:'ぺ', po:'ぽ', kya:'きゃ', kyu:'きゅ', kyo:'きょ', sha:'しゃ', shu:'しゅ', sho:'しょ', cha:'ちゃ', chu:'ちゅ', cho:'ちょ', nya:'にゃ', nyu:'にゅ', nyo:'にょ', hya:'ひゃ', hyu:'ひゅ', hyo:'ひょ', mya:'みゃ', myu:'みゅ', myo:'みょ', rya:'りゃ', ryu:'りゅ', ryo:'りょ', gya:'ぎゃ', gyu:'ぎゅ', gyo:'ぎょ', ja:'じゃ', ju:'じゅ', jo:'じょ', bya:'びゃ', byu:'びゅ', byo:'びょ', pya:'ぴゃ', pyu:'ぴゅ', pyo:'ぴょ'}

var list2 = {a:'あ', i:'い', u:'う', e:'え', o:'お', ka:'か', ki:'き', ku:'く', ke:'け', ko:'こ', sa:'さ', shi:'し', su:'す', se:'せ', so:'そ', ta:'た', chi:'ち', tsu:'つ', te:'て', to:'と', na:'な', ni:'に', nu:'ぬ', ne:'ね', no:'の', ha:'は', hi:'ひ', fu:'ふ', he:'へ', ho:'ほ', ma:'ま', mi:'み', mu:'む', me:'め', mo:'も', ya:'や', yu:'ゆ', yo:'よ', ra:'ら', ri:'り', ru:'る', re:'れ', ro:'ろ', wa:'わ', wo:'を', n:'ん', ga:'が', gi:'ぎ', gu:'ぐ', ge:'げ', go:'ご', za:'ざ', ji:'じ', zu:'ず', ze:'ぜ', zo:'ぞ', da:'だ', de:'で', do:'ど', ba:'ば', bi:'び', bu:'ぶ', be:'べ', bo:'ぼ', pa:'ぱ', pi:'ぴ', pu:'ぷ', pe:'ぺ', po:'ぽ', kya:'きゃ', kyu:'きゅ', kyo:'きょ', sha:'しゃ', shu:'しゅ', sho:'しょ', cha:'ちゃ', chu:'ちゅ', cho:'ちょ', nya:'にゃ', nyu:'にゅ', nyo:'にょ', hya:'ひゃ', hyu:'ひゅ', hyo:'ひょ', mya:'みゃ', myu:'みゅ', myo:'みょ', rya:'りゃ', ryu:'りゅ', ryo:'りょ', gya:'ぎゃ', gyu:'ぎゅ', gyo:'ぎょ', ja:'じゃ', ju:'じゅ', jo:'じょ', bya:'びゃ', byu:'びゅ', byo:'びょ', pya:'ぴゃ', pyu:'ぴゅ', pyo:'ぴょ'}


var incorrectList = {}

var curentGame = 0;
var maxGame = 102;
var correct = 0;
var incorrect = 0;
var index1;

 function iniSet() {
   document.getElementById('correct').innerHTML = correct;
   document.getElementById('incorrect').innerHTML = incorrect;
   document.getElementById('progress').innerHTML = curentGame + 1;


   var aryKeys = Object.keys(list1);
   index1 = aryKeys[Math.floor(Math.random() * aryKeys.length)];

   document.getElementById('question').innerHTML = list1[index1];

   delete list2[index1];


   //ボタン値セット
   var i;
   var j;
   for (i = 0; i < 4; i++) { 
      var aryKeys = Object.keys(list2);
      var index = aryKeys[Math.floor(Math.random() * aryKeys.length)];
      j = i + 1;
      document.getElementById('button' + j).value = index;
      delete list2[index];
   }

   var a = Math.floor( Math.random() * 4 ) + 1 ;
   document.getElementById('button' + a).value = index1;

   list2 = {a:'あ', i:'い', u:'う', e:'え', o:'お', ka:'か', ki:'き', ku:'く', ke:'け', ko:'こ', sa:'さ', shi:'し', su:'す', se:'せ', so:'そ', ta:'た', chi:'ち', tsu:'つ', te:'て', to:'と', na:'な', ni:'に', nu:'ぬ', ne:'ね', no:'の', ha:'は', hi:'ひ', fu:'ふ', he:'へ', ho:'ほ', ma:'ま', mi:'み', mu:'む', me:'め', mo:'も', ya:'や', yu:'ゆ', yo:'よ', ra:'ら', ri:'り', ru:'る', re:'れ', ro:'ろ', wa:'わ', wo:'を', n:'ん', ga:'が', gi:'ぎ', gu:'ぐ', ge:'げ', go:'ご', za:'ざ', ji:'じ', zu:'ず', ze:'ぜ', zo:'ぞ', da:'だ', de:'で', do:'ど', ba:'ば', bi:'び', bu:'ぶ', be:'べ', bo:'ぼ', pa:'ぱ', pi:'ぴ', pu:'ぷ', pe:'ぺ', po:'ぽ', kya:'きゃ', kyu:'きゅ', kyo:'きょ', sha:'しゃ', shu:'しゅ', sho:'しょ', cha:'ちゃ', chu:'ちゅ', cho:'ちょ', nya:'にゃ', nyu:'にゅ', nyo:'にょ', hya:'ひゃ', hyu:'ひゅ', hyo:'ひょ', mya:'みゃ', myu:'みゅ', myo:'みょ', rya:'りゃ', ryu:'りゅ', ryo:'りょ', gya:'ぎゃ', gyu:'ぎゅ', gyo:'ぎょ', ja:'じゃ', ju:'じゅ', jo:'じょ', bya:'びゃ', byu:'びゅ', byo:'びょ', pya:'ぴゃ', pyu:'ぴゅ', pyo:'ぴょ'}
}

 function btnPush(btnNumber) {
  question = document.getElementById('question').innerHTML;
  answer = document.getElementById(btnNumber).value;
  question = question.replace(/\r?\n/g,"");
  if (question == list1[answer]){
   correct = correct +1;
   alert('Correct!');
  }else{
   incorrect = incorrect +1;
   incorrectList[index1] = question;
   alert('Incorrect!\n\nCorrect answer:\n    '+ question +' -> ' + index1);
  }
  if(curentGame == maxGame - 1){
    document.getElementById("disp2").style.display="none";
    document.getElementById("disp3").style.display="block";
    document.getElementById('score').innerHTML = correct;
    document.getElementById('maxScore').innerHTML = maxGame;

    var htmlInc1 = "";
    for(var key in incorrectList){
       htmlInc1 = "<h3>Characters you should remember:</h3>";
    }

    var htmlInc = htmlInc1 + "<h1><table style='font-size: 15pt;'>";
    for(var key in incorrectList){
      htmlInc = htmlInc + "<tr><td>&nbsp;&nbsp;&nbsp;" + incorrectList[key] + "</td><td> :   </td><td>" + key + "</td>";
    }
    htmlInc = htmlInc + "</table></h1>";
    document.getElementById('incList').innerHTML = htmlInc;
  }else{
  curentGame = curentGame + 1;
  delete list1[index1];
  iniSet();
 }
 }

 function start(maxNum) {
    document.getElementById("disp1").style.display="none";
    document.getElementById("disp2").style.display="block";
  if (maxNum == 10)
  {
     maxGame = 10;
  }
  else
  {
     maxGame = 102;
  }
   document.getElementById('max').innerHTML = maxGame;
 }

iniSet();
