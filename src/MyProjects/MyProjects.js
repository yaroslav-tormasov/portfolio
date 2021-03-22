import React from 'react';
import style from './MyProjects.module.css';
import styleContainer from '../Common/Styles/Container.module.css';
import Project from "../MyProjects/Project/Project";


function MyProjects() {
    // const social = {
    //     backgroundImage: `url(${socialImage})`,
    // };
    // const todolist = {
    //     backgroundImage: `url(${todoImage})`,
    // };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.projects}>
                    <Project title={"Todolist"} description={"React + Redux, hooks"}/>
                    <Project title={"SocialNetwork"} description={"React, HTML + CSS"}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;