function gets() {
    $.get("http://www.liulongbin.top:3006/api/cmtlist", function (res) {
        if (res.status !== 200) return alert("获取失败")
        var newdata = []
        $.each(res.data, function (i, item) {
            var str = `<li class="list-group-item">
             <span class="badge" style="background-color: #F0AD4E;">评论时间:${item.time}</span>
             <span class="badge" style="background-color: #5BC0DE;">评论人:${item.username}</span> ${item.content}</li>`
            newdata.push(str)

        })
        
        $('#cmt-list').empty().append(newdata.join(''))
        
        
    })
}
gets()
$(function () {
    $("#formAddCmt").submit(function (e) {
        console.log(1213);
        // 阻止转跳
        e.preventDefault()
        //  serialize()form的方法 快速获取表单域提交的值
        var data = $(this).serialize()
        console.log($(this).serialize());
        $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
            if (res.status !== 201) return alert("添加失败")
            gets()
            // reset() 原生js的方法
            $("#formAddCmt")[0].reset()
        })
    })

})

