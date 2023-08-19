import React, {useState} from 'react';
import enemies from "../data/enemies.json"
import "../styles/pages/main.scss"
import {random} from "../utils/random";

const Main = () => {
    let defaultRandomNumber = random(0, enemies.length)

    let [enemy, setEnemy] = useState({
        name: enemies[defaultRandomNumber].name,
        image: enemies[defaultRandomNumber].image
    })

    return (
        <div className="main">
            <div className="content">
                <div className="options"></div>
                <div className="result">
                    <p className="name">{enemy.name}</p>
                    <section className="image">
                        <div className="block">
                            <img src={`https://genshin.honeyhunterworld.com/${enemy.image}`}/>
                        </div>
                    </section>
                    <div className="button">
                        <button onClick={() => {
                            let randomNumber = random(0, enemies.length)
                            setEnemy({
                                name: enemies[randomNumber].name,
                                image: enemies[randomNumber].image
                            })
                        }}>Сгенерировать</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
