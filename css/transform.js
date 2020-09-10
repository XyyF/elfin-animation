/**
 * Created by rengar on 2020/9/8.
 */

void function transform() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initButton() {
        const radio = window.elfinJsonp.createInput('transform动画', 'css')
        const label = window.elfinJsonp.createLabel('transform动画')
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        radio.addEventListener('input', () => {
            // 改变动画class
            animation.className = 'animation animation__transform'
            // 改变说明class
            bodyDetail.className = 'body__detail body__detail-transform'
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
            <div class="detail__transform">
                <p>
                    一：transition动画中会产生新的图层(Has an active accelerated transform animation or transition)，过度使用会带来图层创建的成本过大
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gij9tuz35cj30wy0u0dhc.jpg" style="width: 400px;">
                </p>
                <p>
                    二：动画通过修改CSS视觉格式化模型的坐标空间，发生在Composite Layers，不会触发回流、重绘
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gij9y7pslrj31b20s2my8.jpg" style="width: 300px;display: block">
                </p>
            </div>
        `
    }

    function initStyle() {
        const style = document.createElement('style')
        style.innerHTML = `
            @keyframes transformAnimation {
                0% {
                    transform: translateX(0);
                }

                50% {
                    transform: translateX(300px);
                }

                100% {
                    transform: translateX(0);
                }
            }

            .animation__transform.animation {
                animation: transformAnimation 4s infinite;
            }
        `
        document.head.appendChild(style)
    }

    initButton()
    initStyle()
}()