import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../Common/Styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input type="text" className={style.formArea} placeholder="Name"/>
                    <input type="text" className={style.formArea} placeholder="e-mail"/>
                    <textarea className={style.messageArea} placeholder="Your message"/>
                    <button type="submit">Send message</button>
                </form>
                </div>
        </div>
    );
}

export default Contacts;