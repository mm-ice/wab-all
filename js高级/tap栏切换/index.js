var that
class Tab {
    constructor(id) {
        this.Tab = document.querySelector(id)
        this.tabadd = this.Tab.querySelector(".tabadd")
        this.ul = this.Tab.querySelector(".fisrstnav ul")
        this.fsection = this.Tab.querySelector(".tabscon")
        this.init()
        that = this
    }
    init() {
        this.updateNode()
        this.tabadd.onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.guanbi[i].onclick = this.removeTab
            // 两个都是在做同一个事件  所以 两个 调用一个事件函数就可以
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }
    //  把获取的元素抽取出来 在添加或删除的时候从新调用渲染
    updateNode() {
        this.lis = this.Tab.querySelectorAll("li")
        this.sections = this.Tab.querySelectorAll("section")
        this.guanbi = this.Tab.querySelectorAll(".icon-guanbi")
        this.spans = this.Tab.querySelectorAll(" .fisrstnav  li span:first-child")

    }

    //  清除
    clearClassName() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    //  切换
    toggleTab() {
        //   先清除所有类名 
        that.clearClassName()

        this.className = "liactive"
        that.sections[this.index].className = "conactive"
    }
    //  添加
    addTab() {
        //  创建一个随机小数
        var num = Math.random()
        
        that.clearClassName()
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        console.log(li);
        var section = `<section class="conactive">${num}</section>`
        that.ul.insertAdjacentHTML('beforeend', li)
        that.fsection.insertAdjacentHTML('beforeend', section)
        //  在添加完元素之后 从新在给每个元素添加事件
        that.init()
    }
    // 删除
    removeTab(e) {
        e.stopPropagation()
        var index = this.parentNode.index
        that.lis[index].remove()
        that.sections[index].remove()
        // 通过获取元素查询是否获取到 来判断是否进行下面运算 
        if (document.querySelector(".liactive")) return
        //   //  在删除完元素之后 从新在给每个元素添加事件
        that.init()
        //  利用索引来判断li的索引是不是小于0 小于0就代表没有li元素就不添加点击事件
        index--
        that.lis[index] && that.lis[index].onclick()
    }
    //  修改
    editTab() {
        //  双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //  给span添加创建input元素 并把span的内容添加到新建的 input里面
        this.innerHTML = `<input type="text" value="${this.innerText}"/>`
        //  获取到input元素
        var input = this.children[0]
        console.log(this.children[0]);
        //     全选中内容
        input.select() // 选中
//  失去焦点把input的内容赋值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                console.log(1313);
            // this指向的都是input 所以可以直接调用上面的函数
                this.blur()
            }
        }
    }

}

new Tab("#tab")