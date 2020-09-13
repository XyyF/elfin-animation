/**
 * Created by rengar on 2020/9/8.
 */

void function margin() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initRadio() {
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
        wrapper.className = 'radio__wrapper'
        wrapper.appendChild(radio)
        wrapper.appendChild(label)

        btnWrapper.insertBefore(wrapper, animation)
    }

    function initDetail() {
        detailWrapper.innerHTML = `
            <div class="detail__margin">
                <p>
                    一：margin-left动画发生CLS(Cumulative Layout Shift)布局偏移，当可见元素改变了它的位置，从一个渲染帧到下一个。
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gimqe1ympsj318q0cojrt.jpg" style="width: 400px;">
                </p>
                <p>
                    二：在帧线程更新后，Recalculate Style -> Layout -> Paint -> Composite Layers
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

    initRadio()
    initStyle()
}()