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
                    <p style={{fontSize: '13px'}}>
                        대표 : zero86
                    </p>
                    <p style={{fontSize: '13px'}}>
                        연락처 : 010-1234-5678<br/>
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
            <div className={FooterStyle['body-copyright']}>
                <p>
                    © 2020 zero86 All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
