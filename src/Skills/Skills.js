import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../Common/Styles/Container.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"JS cool"}/>
                    <Skill title={"CSS"} description={"CSS top"}/>
                    <Skill title={"JS"} description={""}/>
                    <Skill title={"JS"} description={""}/>
                    <Skill title={"JS"} description={""}/>
                    <Skill title={"JS"} description={""}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;