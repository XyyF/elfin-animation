/**
 * Created by rengar on 2020/9/16.
 */

void function padding() {
    let count = 0
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initRadio() {
        const radio = window.elfinJsonp.createInput('padding动画', 'css')
        const label = window.elfinJsonp.createLabel('padding动画')
        const animation = document.querySelector('.animation')
        radio.addEventListener('input', () => {
            count = 0
            window.elfinJsonp.initStyle()
            window.elfinJsonp.clearAnimationFrame()
            window.elfinJsonp.createAnimationFrame(animationFrame)
            initDetail()
        })
        // 包裹容器
        const wrapper = document.createElement('div')
        wrapper.className = 'radio__wrapper'
        wrapper.appendChild(radio)
        wrapper.appendChild(label)

        btnWrapper.insertBefore(wrapper, animation)

        function animationFrame() {
            if (count < 300) {
                count += 2
                animation.style.paddingLeft = `${count}px`
            } else {
                count = 0
            }
            window.elfinJsonp.createAnimationFrame(animationFrame)
        }
    }

    function initDetail() {
        detailWrapper.innerHTML = `
            <div class="detail__padding">
                <p>
                    <h3>Performance</h3>
                    <!--<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1giozq7vgm5j317e0u0gp7.jpg" style="width: 700px;display: block;">-->
                </p>
            </div>
        `
    }

    initRadio()
}()