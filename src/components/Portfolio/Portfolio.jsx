import "./portfolio.scss"
import PortfolioCard from "./PortfolioCard"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio" >
            <h1>Portfolio</h1>
            <div className="container">
                <PortfolioCard
                    appUrl="https://beeby.herokuapp.com/"
                    appImg="https://user-images.githubusercontent.com/61998811/145013371-04872f08-734e-4fc6-8957-4469e7eab508.png"
                    appTitle="BeeBy"
                    githubLink="https://github.com/Project-3-UW" />
                <PortfolioCard
                    appUrl="https://github.com/eliglezz/dinner-and-a-drink"
                    appImg="https://user-images.githubusercontent.com/61998811/136456990-ec6edfd4-79de-4768-a054-26f01504e8ab.png"
                    appTitle="Dinner abd a Drink"
                    githubLink="https://github.com/eliglezz/dinner-and-a-drink" />
                <PortfolioCard
                    appUrl="https://github.com/eliglezz/in-touch"
                    appImg="https://user-images.githubusercontent.com/61998811/140866428-0e800339-8ad3-4036-b30e-d6dfeef2bced.png"
                    appTitle="inTouch"
                    githubLink="https://github.com/eliglezz/in-touch" />
                <PortfolioCard
                    appUrl="https://workout-tracker-elig.herokuapp.com/"
                    appImg="https://user-images.githubusercontent.com/61998811/142158577-93ae597d-4a3c-4cef-8558-7ae3bb8722c7.png"
                    appTitle="Workout Tracker"
                    githubLink="https://github.com/eliglezz/mongo-workout-tracker" />
                <PortfolioCard
                    appUrl=""
                    appImg="https://user-images.githubusercontent.com/61998811/137667016-9833337b-fdf2-4767-a71e-c19b56277110.gif"
                    appTitle="ReadMe Generator"
                    githubLink="https://github.com/eliglezz/readme-gen-nodejs" />
                <PortfolioCard
                    appUrl="https://eliglezz.github.io/workday-w-api/"
                    appImg="https://user-images.githubusercontent.com/61998811/145149506-055f43be-76e4-4529-bedc-bd07c4ffa321.png"
                    appTitle="Work Day Planner"
                    githubLink="https://github.com/eliglezz/workday-w-api" />
            </div>
        </div>
    )
}