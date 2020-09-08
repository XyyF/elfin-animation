/**
 * Created by rengar on 2020/9/8.
 */

void function fixed() {
    const btnWrapper = document.querySelector('.body__btn-wrapper')
    const detailWrapper = document.querySelector('.body__detail')

    function initButton() {
        const btn = document.createElement('button')
        btn.innerText = 'fixed动画'
        const animation = document.querySelector('.animation')
        const bodyDetail = document.querySelector('.body__detail')
        btn.addEventListener('click', () => {
            animation.className = 'animation animation__fixed'
            bodyDetail.className = 'body__detail body__detail-fixed'
            initDetail()
        })

        btnWrapper.insertBefore(btn, animation)
    }

    function initDetail() {
        detailWrapper.innerHTML = `
            <div class="detail__margin">
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
                top: 35px;
                animation: fixedAnimation 4s infinite;
            }
        `
        document.head.appendChild(style)
    }

    initButton()
    initStyle()
}()