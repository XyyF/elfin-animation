/**
 * Created by rengar on 2020/9/8.
 */

void function margin() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initButton() {
        const radio = window.elfinJsonp.createInput('margin动画', 'css')
        const label = window.elfinJsonp.createLabel('margin动画')
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        radio.addEventListener('input', () => {
            animation.className = 'animation animation__margin'
            bodyDetail.className = 'body__detail body__detail-margin'
            initDetail()
        })
        // 包裹容器
        const wrapper = document.createElement('div')
        wrapper.appendChild(radio)
        wrapper.appendChild(label)
        wrapper.style.display = 'inline-block'

        btnWrapper.insertBefore(wrapper, animation)
    }

    function initDetail() {
        detailWrapper.innerHTML = `
            <div class="detail__margin">
                <p>
                    一：发生Layout Shift布局偏移，因为改变了盒模型本身的结构
                </p>
                <p>
                    二：margin: 发生Layout Shift布局偏移，Recalculate Style -> Layout -> Paint -> Composite Layers
                </p>
            </div>
        `
    }

    function initStyle() {
        const style = document.createElement('style')
        style.innerHTML = `
            @keyframes marginAnimation {
                0% {
                    margin-left: 0;
                }

                50% {
                    margin-left: 300px;
                }

                100% {
                    margin-left: 0;
                }
            }

            .animation__margin.animation {
                animation: marginAnimation 4s infinite;
            }
        `
        document.head.appendChild(style)
    }

    initButton()
    initStyle()
}()