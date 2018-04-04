angular.module('diary', [])
.controller('diaryController', function diaryController($scope) {
    let ctrl = this

    ctrl.listItems = JSON.parse(localStorage.getItem("123")) || []
    ctrl.numItem = ''
    ctrl.startAdd = false

    ctrl.addItems = function() {
        ctrl.listItems.push({text: ctrl.nameItems, comments: []})
        localStorage.setItem("123", JSON.stringify(ctrl.listItems))
    }

    ctrl.delItems = function(index) {
        ctrl.oldList = ctrl.listItems
        ctrl.listItems = ctrl.oldList.filter((item, i) => i !== index)
        localStorage.setItem("123", JSON.stringify(ctrl.listItems))

    }

    ctrl.showComments = function(index) {
        ctrl.numItem = index
        ctrl.arrActiveItem = ctrl.listItems[ctrl.numItem]
    }

    ctrl.keyStart = function(keyCode) {
        (keyCode === 17) ? ctrl.startAdd = true : null
    }

    ctrl.keydown = function(keyCode, comment) {
        if (keyCode === 17) {
            ctrl.startAdd = false
        }

        if (keyCode === 13 && ctrl.startAdd) {
            ctrl.listItems[ctrl.numItem].comments.push({"comment": comment})
            localStorage.setItem("123", JSON.stringify(ctrl.listItems))
            ctrl.startAdd = false
        }
    }

})