/**
 * Created by rengar on 2020/9/8.
 */

void function transform() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initButton() {
        const btn = document.createElement('button')
        btn.innerText = 'transform动画'
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        btn.addEventListener('click', () => {
            animation.className = 'animation animation__transform'
            bodyDetail.className = 'body__detail body__detail-transform'
        })

        btnWrapper.insertBefore(btn, animation)
    }

    function initDetail() {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="detail__transform">
                <p>
                    一：会产生新的图层(Has an active accelerated transform animation or transition)
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gij9tuz35cj30wy0u0dhc.jpg" style="width: 400px;">
                </p>
                <p>
                    二：动画通过修改CSS视觉格式化模型的坐标空间，发生在Composite Layers，不会触发回流、重绘
                    <img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gij9y7pslrj31b20s2my8.jpg" style="width: 300px;display: block">
                </p>
            </div>
        `
        detailWrapper.appendChild(div)
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
    initDetail()
    initStyle()
}()