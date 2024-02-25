

export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

// above the code below is destructured:
// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>;
// }