import TeamBuilderImage from "../assets/images/TeamBuilder.jpg";
import BurgerImage from "../assets/images/burger.jpg";
import NoteImage from "../assets/images/Note.jpg";
import WeatherDashboard from '../assets/images/weatherDashboard.jpg';
import Space from "../assets/images/Space.jpg";
import Planner from "../assets/images/DailyPlanner.jpg";


const projects = [
    {
        name: "Team Builder",
        description: "Due to the shift to a remote workforce, it can be difficult for teams to create and maintain relationships. This group application aims to help build teams, foster creativity, and strengthen culture.",
        image: TeamBuilderImage,
        techUsed: "HTML/Bootstrap CSS, Font Awesome/Mimic.css, Express Handlebars, jQuery/Auth0, ExpressJS/Sessions, File Stack, Heroku, MySQL/Sequelize, Passport",
        githubLink: "https://github.com/nkleinmann/the-team-builders",
        application: "https://the-team-builder.herokuapp.com/"
    },
    {
        name: "Eat Da Burger!",
        description: "Restaurant application that allows users to input burger names and note if they have devoured the burgers or not. Users can input burgers, delete, and devour burgers.",
        image: BurgerImage,
        techUsed: "HTML, CSS, JavaScript, jQuery, Node, Express, Handlebars, MySQL, and a homemade ORM (yum!)",
        githubLink: "https://github.com/nkleinmann/NK-Eat-Da-Burger",
        application: "https://pure-earth-06219.herokuapp.com/"
    },
    {
        name: "Express Note Taker",
        description: "Note taker application that allows allows the user to create, save, and delete notes. The application can help users refer back to notes to organize thoughts and keep track of tasks needed to complete.",
        image: NoteImage,
        techUsed: "HTML, CSS, JavaScript, Node.js, Express",
        githubLink: "https://github.com/nkleinmann/ExpressHWNoteTaker",
        application: "https://cryptic-gorge-51487.herokuapp.com/"
    },
    {
        name: "Weather Dashboard",
        description: "Weather application that shows current weather and five day forecast for locations based on user input. Application uses icons to represent weather conditions and stores previously searched for cities and displays them to the user.",
        image: WeatherDashboard,
        techUsed: "HTML, CSS and CSS Framework: Materialize, JaveScript, jQuery, AJAX and API requests",
        githubLink: "https://github.com/nkleinmann/06-Server-Side-APIs-NK",
        application: "https://nkleinmann.github.io/06-Server-Side-APIs-NK/"
    },
    {
        name: "Photos from Space",
        description: "Photo application for anyone interested in space.",
        image: Space,
        techUsed: "HTML, CSS and CSS Framework: Materialize, JavaScript jQuery New Third-Party API: particles.js Server-Side APIs: NASA APIs and Space X API",
        githubLink: "https://github.com/nkleinmann/Project-Wilder",
        application: "https://nkleinmann.github.io/Project-Wilder/"
    },
    {
        name: "Daily Planner",
        description: "Daily planner application to help the user organize tasks based on each hour during 9am-5pm time blocks. User can write new notes and save and delete notes. The time blocks are also color coded to show past, present, or future based on current time.",
        image: Planner,
        techUsed: "HTML, CSS and CSS Framework: Bootstrap, JavaScript, and jQuery",
        githubLink: "https://github.com/nkleinmann/05-Third-Party-APIs-NK",
        application: "https://nkleinmann.github.io/05-Third-Party-APIs-NK/"
    },
    
]

export default projects;