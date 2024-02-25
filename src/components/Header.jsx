import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    {/* curly braces makes dynamic content, reactDescriptions is a list of content you want to be dynamic
    in square brakets you can input the function to make the array content dynamic with the max of 2 in this case 
    to make it more readable created a description variable*/}

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}