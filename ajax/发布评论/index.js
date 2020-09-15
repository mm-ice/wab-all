function getcom() {
    $.ajax({
        url: 'http://www.escook.cn:3006/api/cmtlist',
        success: function (res) {
            if (res.status !== 200) return alert('获取评论列表失败！')
            var rows = []
            $.each(res.data, function (i, item) {
                var str = '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + item.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + item.username + '</span>' + item.content + '</li>'
                rows.push(str)
                console.log(str);
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getcom()
$(function () {
    $("#formAddCmt").submit(function (e) {
        console.log(123);
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data);
        $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
            if (res.status !== 201) {
                return alert("发布失败")
            }
            getcom()
            $("#formAddCmt")[0].reset()
        })
    })
})