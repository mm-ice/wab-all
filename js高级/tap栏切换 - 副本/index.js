var that
class Tab {
    constructor(id) {
        this.tab = document.querySelector(id)
        this.lis = this.tab.querySelectorAll("li")
        this.sections = this.tab.querySelectorAll("section")
        this.but = this.tab.querySelector(".tabadd")
        this.ul = this.tab.querySelector("ul")
        this.tascon = this.tab.querySelector(".tabscon")
        that = this
        this.init()
    }

    init() {
        this.updateNode()
        this.but.onclick = this.addTab
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.guanbi[i].onclick = this.removeTab


        }

    }
    //  把获取的元素抽取出来 在添加或删除的时候从调用渲染
    updateNode() {
        this.lis = this.tab.querySelectorAll("li")
        this.sections = this.tab.querySelectorAll("section")
        this.guanbi = this.tab.querySelectorAll(".icon-guanbi")
    }
    //  清除
    clearClassName() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ""
            this.sections[i].className = ''
        }
    }
    //  切换
    toggleTab() {
        that.clearClassName()
        this.className = "liactive"
        that.sections[this.index].className = "conactive"
    }
    //  添加
    addTab() {
       
        var num = Math.random()
        that.clearClassName()
        var li = `<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>`
        var scon = `<section class="conactive">${num}</section>`
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tascon.insertAdjacentHTML('beforeend', scon)
        that.init()
    }
    // 删除
    removeTab(e) {
    
        e.stopPropagation()
        var index = this.parentNode.index
        that.lis[index].remove()
        that.sections[index].remove()
        if (window.querySelector(".liactive")) return
        that.init()
        index--
        that.lis[index] && that.lis[index].onclick()
    }
}

new Tab("#tab")