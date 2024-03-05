

export default function TabButton({children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected && "active"} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}

// above the code below is destructured:
// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>;
// }