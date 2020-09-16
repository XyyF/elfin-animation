/**
 * Created by rengar on 2020/9/10.
 */
window.elfinJsonp = Object.create(null)

void function () {
    let timer = null
    // 创建input
    window.elfinJsonp.createInput = function(value, name) {
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', name)
        input.setAttribute('value', value)
        return input
    }

    // 创建label
    window.elfinJsonp.createLabel = function(value) {
        const label = document.createElement('label')
        label.setAttribute('for', value)
        label.innerText = value
        return label
    }

    window.elfinJsonp.createAnimationFrame = function(callback) {
        timer = setTimeout(() => {
            callback()
        }, 10)
    }

    window.elfinJsonp.clearAnimationFrame = function() {
        clearTimeout(timer)
    }

    window.elfinJsonp.initStyle = function() {
        const animation = document.querySelector('.animation')
        animation.style.marginLeft = ''
        animation.style.paddingLeft = ''
    }
}()