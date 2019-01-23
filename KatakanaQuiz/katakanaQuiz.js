document.getElementById("disp0").style.display="none";

var list1 = {a:'ア', i:'イ', u:'ウ', e:'エ', o:'オ', ka:'カ', ki:'キ', ku:'ク', ke:'ケ', ko:'コ', sa:'サ', shi:'シ', su:'ス', se:'セ', so:'ソ', ta:'タ', chi:'チ', tsu:'ツ', te:'テ', to:'ト', na:'ナ', ni:'ニ', nu:'ヌ', ne:'ネ', no:'ノ', ha:'ハ', hi:'ヒ', fu:'フ', he:'ヘ', ho:'ホ', ma:'マ', mi:'ミ', mu:'ム', me:'メ', mo:'モ', ya:'ヤ', yu:'ユ', yo:'ヨ', ra:'ラ', ri:'リ', ru:'ル', re:'レ', ro:'ロ', wa:'ワ', wo:'ヲ', n:'ン', ga:'ガ', gi:'ギ', gu:'グ', ge:'ゲ', go:'ゴ', za:'ザ', ji:'ジ', zu:'ズ', ze:'ゼ', zo:'ゾ', da:'ダ', de:'デ', do:'ド', ba:'バ', bi:'ビ', bu:'ブ', be:'ベ', bo:'ボ', pa:'パ', pi:'ピ', pu:'プ', pe:'ペ', po:'ポ', kya:'キャ', kyu:'キュ', kyo:'キョ', sha:'シャ', shu:'シュ', sho:'ショ', cha:'チャ', chu:'チュ', cho:'チョ', nya:'ニャ', nyu:'ニュ', nyo:'ニョ', hya:'ヒャ', hyu:'ヒュ', hyo:'ヒョ', mya:'ミャ', myu:'ミュ', myo:'ミョ', rya:'リャ', ryu:'リュ', ryo:'リョ', gya:'ギャ', gyu:'ギュ', gyo:'ギョ', ja:'ジャ', ju:'ジュ', jo:'ジョ', bya:'ビャ', byu:'ビュ', byo:'ビョ', pya:'ピャ', pyu:'ピュ', pyo:'ピョ'}

var list2 = {a:'ア', i:'イ', u:'ウ', e:'エ', o:'オ', ka:'カ', ki:'キ', ku:'ク', ke:'ケ', ko:'コ', sa:'サ', shi:'シ', su:'ス', se:'セ', so:'ソ', ta:'タ', chi:'チ', tsu:'ツ', te:'テ', to:'ト', na:'ナ', ni:'ニ', nu:'ヌ', ne:'ネ', no:'ノ', ha:'ハ', hi:'ヒ', fu:'フ', he:'ヘ', ho:'ホ', ma:'マ', mi:'ミ', mu:'ム', me:'メ', mo:'モ', ya:'ヤ', yu:'ユ', yo:'ヨ', ra:'ラ', ri:'リ', ru:'ル', re:'レ', ro:'ロ', wa:'ワ', wo:'ヲ', n:'ン', ga:'ガ', gi:'ギ', gu:'グ', ge:'ゲ', go:'ゴ', za:'ザ', ji:'ジ', zu:'ズ', ze:'ゼ', zo:'ゾ', da:'ダ', de:'デ', do:'ド', ba:'バ', bi:'ビ', bu:'ブ', be:'ベ', bo:'ボ', pa:'パ', pi:'ピ', pu:'プ', pe:'ペ', po:'ポ', kya:'キャ', kyu:'キュ', kyo:'キョ', sha:'シャ', shu:'シュ', sho:'ショ', cha:'チャ', chu:'チュ', cho:'チョ', nya:'ニャ', nyu:'ニュ', nyo:'ニョ', hya:'ヒャ', hyu:'ヒュ', hyo:'ヒョ', mya:'ミャ', myu:'ミュ', myo:'ミョ', rya:'リャ', ryu:'リュ', ryo:'リョ', gya:'ギャ', gyu:'ギュ', gyo:'ギョ', ja:'ジャ', ju:'ジュ', jo:'ジョ', bya:'ビャ', byu:'ビュ', byo:'ビョ', pya:'ピャ', pyu:'ピュ', pyo:'ピョ'}


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

   list2 = {a:'ア', i:'イ', u:'ウ', e:'エ', o:'オ', ka:'カ', ki:'キ', ku:'ク', ke:'ケ', ko:'コ', sa:'サ', shi:'シ', su:'ス', se:'セ', so:'ソ', ta:'タ', chi:'チ', tsu:'ツ', te:'テ', to:'ト', na:'ナ', ni:'ニ', nu:'ヌ', ne:'ネ', no:'ノ', ha:'ハ', hi:'ヒ', fu:'フ', he:'ヘ', ho:'ホ', ma:'マ', mi:'ミ', mu:'ム', me:'メ', mo:'モ', ya:'ヤ', yu:'ユ', yo:'ヨ', ra:'ラ', ri:'リ', ru:'ル', re:'レ', ro:'ロ', wa:'ワ', wo:'ヲ', n:'ン', ga:'ガ', gi:'ギ', gu:'グ', ge:'ゲ', go:'ゴ', za:'ザ', ji:'ジ', zu:'ズ', ze:'ゼ', zo:'ゾ', da:'ダ', de:'デ', do:'ド', ba:'バ', bi:'ビ', bu:'ブ', be:'ベ', bo:'ボ', pa:'パ', pi:'ピ', pu:'プ', pe:'ペ', po:'ポ', kya:'キャ', kyu:'キュ', kyo:'キョ', sha:'シャ', shu:'シュ', sho:'ショ', cha:'チャ', chu:'チュ', cho:'チョ', nya:'ニャ', nyu:'ニュ', nyo:'ニョ', hya:'ヒャ', hyu:'ヒュ', hyo:'ヒョ', mya:'ミャ', myu:'ミュ', myo:'ミョ', rya:'リャ', ryu:'リュ', ryo:'リョ', gya:'ギャ', gyu:'ギュ', gyo:'ギョ', ja:'ジャ', ju:'ジュ', jo:'ジョ', bya:'ビャ', byu:'ビュ', byo:'ビョ', pya:'ピャ', pyu:'ピュ', pyo:'ピョ'}
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
       htmlInc1 = "<h2>Characters you should remember:</h2>";
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
