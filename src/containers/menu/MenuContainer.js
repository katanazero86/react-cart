import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMenus} from '../../store/menuModule/actions';
import {addCart} from '../../store/cartModule/actions';

import MenuContainerStyle from './MenuContainer.scss';
import MenuImage from "../../components/menu/menu_jmage/MenuImage";
import Like from "../../components/menu/menu_icon/Like";
import Cart from "../../components/menu/menu_icon/Cart";
import MenuInfo from "../../components/menu/menu_info/MenuInfo";
import MenuTitle from "../../components/menu/menu_title/MenuTitle";

const imageLazyLoading = () => {

    const lazyNodeList = document.querySelectorAll('.img-lazy');

    if (lazyNodeList.length > 0) {
        if (window.IntersectionObserver) {

            const options = {
                root: null,
                thredhold: 0.8
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
            lazyNodeList.forEach(node => {
                node.setAttribute('src', node.dataset.src);
                node.dataset.src = '';
                node.classList.add('fade-in');
                node.classList.remove('img-lazy');
            })
        }
    }


};

function MenuContainer() {

    const dispatch = useDispatch();
    const menus = useSelector(store => store.menu.menus);
    const cartItems = useSelector(store => store.cart.cartItems);

    const getMenusDispatch = () => {
        dispatch(getMenus());
    };

    useEffect(() => {
        getMenusDispatch();
    }, []);

    useEffect(() => {
        imageLazyLoading();
    }, [menus]);

    const likeClick = () => {
        alert('준비중..');
    };

    const addCartDispatch = (targetMenu) => {
        if (cartItems.length == 0) {
            dispatch(addCart(targetMenu));
        } else {
            const item = cartItems.find(item => item.menuId === targetMenu.menuId);
            if (item) {
                alert('이미 장바구니에 추가된 상품입니다!');
                return false;
            }
            dispatch(addCart(targetMenu));
        }
    };


    return (
        <div className={MenuContainerStyle.wrap}>
            <MenuTitle title="Menus" subTitle="Delicious all day, every day."/>
            {menus.map(menu => {
                return (
                    <div className={MenuContainerStyle.body} key={menu.menuId}>
                        <MenuImage imgUrl={menu.imgUrl} isSold={menu.isSold} isLazy/>
                        <div className={MenuContainerStyle['body-icon']}>
                            <Like onClick={likeClick}/>
                            <Cart onClick={() => addCartDispatch(menu)}/>
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
