// btnをclickしたら
$(function() {
  $('.btn').on('click', function() {
// text-boxのvalにクリックしましたを出力
    $('.text-box').val('クリックしました！');
  });
});