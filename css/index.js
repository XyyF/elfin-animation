/**
 * Created by rengar on 2020/9/10.
 */
window.elfinJsonp = Object.create(null)

void function () {
    // 创建input
    window.elfinJsonp.createInput = function(value, name) {
        const input = document.createElement('input')
        input.type = 'radio'
        input.name = name
        input.value = value
        return input
    }

    // 创建label
    window.elfinJsonp.createLabel = function(value) {
        const label = document.createElement('label')
        label.for = value
        label.innerText = value
        return label
    }
}()