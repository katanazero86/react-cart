import React from 'react';

import FooterStyle from './Footer.scss'


function Footer() {
    return (
        <footer className={FooterStyle.wrap}>
            <div className={FooterStyle.body}>
                <div className={FooterStyle['body-info-contract']}>
                    <p className={FooterStyle['body-info-contract-company']}>
                        zero86코드
                    </p>
                    <p style={{fontSize : '14px'}}>
                        대표 : zero86
                    </p>
                    <p style={{fontSize : '14px'}}>
                        연락처 : xxxx<br/>
                        E-mail : zero86@test.com
                    </p>
                </div>
                <div className={FooterStyle['body-info-sns']}>
                    @zero86
                    <div className={FooterStyle['body-info-sns-icon']}>
                        <img src='/assets/images/ico_fb.png'/>
                        <img src='/assets/images/ico_insta.png'/>
                        <img src='/assets/images/ico_kakao.png'/>
                        <img src='/assets/images/ico_blog.png'/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
