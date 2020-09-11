/**
 * Created by rengar on 2020/9/8.
 */

void function padding() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initButton() {
        const radio = window.elfinJsonp.createInput('padding动画', 'css')
        const label = window.elfinJsonp.createLabel('padding动画')
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        radio.addEventListener('input', () => {
            animation.className = 'animation animation__padding'
            bodyDetail.className = 'body__detail body__detail-padding'
            initDetail()
        })
        // 包裹容器
        const wrapper = document.createElement('div')
        wrapper.className = 'radio__wrapper'
        wrapper.appendChild(radio)
        wrapper.appendChild(label)

        btnWrapper.insertBefore(wrapper, animation)
    }

    function initDetail() {
        detailWrapper.innerHTML = `
            <div class="detail__padding">
                <p>
                    二：padding: Recalculate Style -> Layout -> Paint -> Composite Layers
                </p>
            </div>
        `
    }

    function initStyle() {
        const style = document.createElement('style')
        style.innerHTML = `
            @keyframes paddingAnimation {
                0% {
                    padding-left: 0;
                }

                50% {
                    padding-left: 300px;
                }

                100% {
                    padding-left: 0;
                }
            }

            .animation__padding.animation {
                animation: paddingAnimation 4s infinite;
            }
        `
        document.head.appendChild(style)
    }

    initButton()
    initStyle()
}()