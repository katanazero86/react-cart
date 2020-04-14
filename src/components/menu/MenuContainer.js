import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMenus} from '../../store/menuModule/actions'

import MenuContainerStyle from './MenuContainer.scss';
import MenuImage from "./menu_jmage/MenuImage";
import Like from "./menu_icon/Like";
import Cart from "./menu_icon/Cart";
import MenuInfo from "./menu_info/MenuInfo";

function MenuContainer() {

    const dispatch = useDispatch();
    const menus = useSelector(store => store.menu.menus);


    const getMenusDispatch = async () => {
        dispatch(getMenus());
    };

    useEffect(() => {
        getMenusDispatch();

        setTimeout(() => {
            const lazyNodeList = document.querySelectorAll('.img-lazy');
            if (lazyNodeList.length > 0) {
                imageLazyLoading(lazyNodeList);
            }

        }, 500);

    }, []);


    const likeClick = () => {
        alert('준비중..');
    };

    const cartClick = () => {

    };

    const imageLazyLoading = (lazyNodeList) => {
        if (window.IntersectionObserver) {

            const options = {
                root: null,
                thredhold: 0.6
            }

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetEl = entry.target;
                        targetEl.setAttribute('src', targetEl.dataset.src);
                        targetEl.dataset.src = '';
                        targetEl.classList.add('fade-in');
                        targetEl.classList.remove('img-lazy');
                        observer.unobserve(targetEl);
                    }
                });
            }, options);
            lazyNodeList.forEach(node => observer.observe(node));


        } else {

        }
    };

    return (
        <div className={MenuContainerStyle.wrap}>
            {menus.map(menu => {
                return (
                    <div className={MenuContainerStyle.body} key={menu.menuId}>
                        <MenuImage imgUrl={menu.imgUrl} isSold={menu.isSold} isLazy/>
                        <div className={MenuContainerStyle['body-icon']}>
                            <Like onClick={likeClick}/>
                            <Cart onClick={cartClick}/>
                        </div>
                        <MenuInfo menuName={menu.menuName} menuSummary={menu.menuSummary}
                                  menuDescription={menu.menuDescription} menuPrice={menu.menuPrice}/>
                    </div>
                )
            })}
        </div>
    )
}


export default MenuContainer
