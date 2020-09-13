/**
 * Created by rengar on 2020/9/8.
 */

void function fixed() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initRadio() {
        const radio = window.elfinJsonp.createInput('fixed动画', 'css')
        const label = window.elfinJsonp.createLabel('fixed动画')
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        radio.addEventListener('input', () => {
            animation.className = 'animation animation__fixed'
            bodyDetail.className = 'body__detail body__detail-fixed'
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
            <div class="detail__margin">           
                <p>
                    <h3>Performance</h3>
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gip0bxin1ij317e0u0gop.jpg" style="width: 700px;display: block">
                </p>
                <p>
                    一：fixed: Recalculate Style -> Layout -> Paint -> Composite Layers
                </p>
            </div>
        `
    }

    function initStyle() {
        const style = document.createElement('style')
        style.innerHTML = `
            @keyframes fixedAnimation {
                0% {
                    left: 0;
                }

                50% {
                    left: 300px;
                }

                100% {
                    left: 0;
                }
            }

            .animation__fixed.animation {
                position: fixed;
                top: 135px;
                animation: fixedAnimation 4s infinite;
            }
            
            .btn__wrapper-fixed {
            }
        `
        document.head.appendChild(style)
    }

    initRadio()
    initStyle()
}()