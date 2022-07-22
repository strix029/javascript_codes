window.alert("あなたにおすすめの音楽を提案しましょう！")

var tenki_txt = [["晴れ","それでは今日は明るめの曲を提案します。","元気な"] ,　
                 ["曇り","それでは今日は落ち着いた曲を提案します。","落ち着いた"], 
                 ["雨","それでは今日は雨の日に合うおしゃれな曲を提案します。","しっとりとしたオシャレな"]];
var music_txt = ["洋楽","邦楽"];
var sunny_artist_txt = [[["Ed Sheeran","Castle on the Hill"],["Taylor Swift","Shake it Off"],["Bruno Mars","24K Magic"]],
                        [["SEKAI NO OWARI","RPG"],["Mrs.GREEN APPLE","青と夏"],["WANIMA","ともに"]]];
var cloudy_artist_txt = [[["曇り洋楽1","楽曲名"],["曇り洋楽2","楽曲名"],["曇り洋楽3","楽曲名"]], //好きなアーティスト・楽曲に書き換えてね
                         [["曇り邦楽1","楽曲名"],["曇り邦楽2","楽曲名"],["曇り邦楽3","楽曲名"]]];
var rain_artist_txt = [[["雨洋楽1","楽曲名"],["雨洋楽2","楽曲名"],["雨洋楽3","楽曲名"]],
                       [["雨邦楽1","楽曲名"],["雨邦楽2","楽曲名"],["雨邦楽3","楽曲名"]]];
var t = -1; //tenki_num
var m = -1; //music_num
var a = -1; //artist_num
var artist_txt = [sunny_artist_txt,cloudy_artist_txt,rain_artist_txt]; //artist_txt[tenki_num][music_num][artist_num][artist_name or song_name]

var tenki=prompt("今日の天気を「"+ tenki_txt[0][0]+ "」、「"+ tenki_txt[1][0]+ "」、「"+ tenki_txt[2][0]+ "」　のどれか教えてください。");

for (var i = 0; i<3; i++){
  if(tenki==tenki_txt[i][0]){
    t = i;
    window.alert(tenki_txt[i][1]);
    var music=prompt("「"+ music_txt[0]+ "」と「"+ music_txt[1]+ "」のどちらが好きか教えてください。");
    for (var j = 0; j<2; j++){
      if(music==music_txt[j]){
        m = j;
        window.alert(music_txt[j]+ "がお好きなんですね。それでは"+tenki_txt[i][0]+"の日に合う"+tenki_txt[i][2]+music_txt[j]+"をご提案します！");
        var artist=prompt("「"+artist_txt[i][j][0][0]+"」「"+artist_txt[i][j][1][0]+"」「"+artist_txt[i][j][2][0]+"」の中から1番好きなアーティストを選択してください！気になるアーティストでも大丈夫です。");
        for (var k = 0; k<3; k++){
          if(artist==artist_txt[i][j][k][0]){
            a = k;
            window.alert("今日は"+tenki_txt[i][0]+"の日で、"+artist_txt[i][j][k][0]+"が好きなあなたには、「"+artist_txt[i][j][k][1]+"」をお勧めします！聴いてみてくださいね！");
          }
        }
      }
    }
  }
}

if (t<0 || m<0 || a<0){
  window.alert("正しく入力してください！");
}
