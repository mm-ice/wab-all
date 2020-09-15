$(function () {
    resetui()
    $("#btnSend").on("click", function () {
        var text = $("#ipt").val().trim()
        if (text.length <= 0) {
            return  $("#ipt").val("")
        }
        $('.talk_list').append(`  <li class="right_word">
        <img src="img/person02.png" /> <span>${text}</span>
      </li>`)
      $("#ipt").val("")
        resetui()
        getmsg(text)
    })
    function getmsg(text) {
        console.log(text);
        $.ajax({
            type:"GET",
            url: 'http://www.escook.cn:3006/api/robot',
            data: {
                spoken:text
            },
            success: function (res) {
                // console.log(res)
                if (res.message === 'success') {
                  // 接收聊天消息
                  var msg = res.data.info.text
                  $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
                  // 重置滚动条的位置
                  resetui()
                  // 调用 getVoice 函数，把文本转化为语音
                  getVoice(text)
                }
            }
         })
     }

    function getVoice(text) {
        $.ajax({
            url: 'http://www.escook.cn:3006/api/synthesize',
            data: {
                text:text
            },
            success: function (res) {
                console.log(res);
                if (res.status === 200) {
                    $("#voice").attr("src".res.voiceUrl)
                }
            }
        })
    }
    $("#ipt").on("keyup", function (e) {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            $('#btnSend').click()
         }
    })

})