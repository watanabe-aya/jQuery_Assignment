$(function(){
  let fortuneResults = {
    money: [
      {stars: '★', detail: '悪い傾向が見られます！財布の紐は絞めておくと吉です！'},
      {stars: '★★', detail: 'まずまず金運です！使いすぎには注意しましょう！'},
      {stars: '★★★', detail: '最高の金運です！いつの間にかお金が溜まっているかも・・・？'}
    ],
    work: [
      {stars: '★', detail: '悪い傾向が見られます！自信過剰にならないように注意しましょう'},
      {stars: '★★', detail: 'まずまず仕事運です！普段通り仕事が進むでしょう！'},
      {stars: '★★★', detail: '最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？'}
    ],
    health: [
      {stars: '★', detail: '悪い傾向が見られます！ケガにご注意を・・・'},
      {stars: '★★', detail: 'まずまず健康運です！無理せず体を動かしましょう！'},
      {stars: '★★★', detail: '最高の健康運です！ランニングの距離を伸ばしても良いですね！'}
    ],
  }
  $(document).on('click','.js-fortune-start', function(){

      // 占い結果の表示
      Object.keys(fortuneResults).forEach(function(key){
        let fortuneNum = (function(){
          return Math.floor((Math.random() * 3) + 1);
        }());
        $('.' + key + ' ' + '.stars').text(fortuneResults[key][fortuneNum-1]['stars']);
        $('.' + key + ' ' + '.detail').text(fortuneResults[key][fortuneNum-1]['detail']);
      })

      // 結果部分の非表示を解除
      $('.result').fadeIn(3000)

      // ボタン名称切り替え
      $(this).text("もう一度占う！")
      $(this).toggleClass('try-again-button');
      $(this).toggleClass('js-fortune-start');
  });

  $(document).on('click','.try-again-button', function(){
    $(this).text("運勢を占う！")
    $('.result').fadeOut(3000)
    $(this).toggleClass('js-fortune-start');
    $(this).toggleClass('try-again-button');
  });

});

