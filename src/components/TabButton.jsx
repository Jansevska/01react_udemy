import { Children } from "react";

export default function TabButton(props) {
    return <li><button>{props.children}</button></li>;
}

// or we can destructure the props and write like this:
// export default function TabButton({children}) {
//     return <li><button>{children}</button></li>;
// }