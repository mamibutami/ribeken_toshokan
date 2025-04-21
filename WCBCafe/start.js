//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text,
    {
        easing: 'easeInOut',
        strokeWidth:0.5,
        duration:1000,
        traiWidth: 0.5,
        color: '#0bd',
        trailWidth: 0.5 ,
        trailColor: '#faf7f0',
        top: '50%' ,
        text: {
            style:{
                position:'absolute',
                left:'50%',
                top:'50%',
                padding:'0',
                margin:'-30px 0 0 0',
                transform:'translate(-50%,-50%)',
                'font-size':'5rem',
                color:'#432',
            },
            autoStyleContainer: false 
        },
        step: function(state,bar) {
            bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
        }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します　1.0なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});