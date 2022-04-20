import { useState } from "react";

function App2() {


    const allItems = [
        { name: "Item1", price: 12.99, isChecked: false },
        { name: "Item2", price: 30.99, isChecked: true},
        { name: "Item3", price: 29.99, isChecked: true}
    ]

    const [items, setItems] = useState(allItems);





    const changeItemChecked = (e, itemIndex) => {
        const checked = e.target.checked;
        setItems(prevState => {
            return prevState.map((item, index) => {
                if(index === itemIndex) {
                    return {
                        ...item,
                        isChecked: checked
                    }
                } else {
                    return {
                        ...item
                    }
                }
            })
        })
    }

    return (
        <div>
            <h1>Hello from App2 Component!</h1>
            {items.map((item, index) =>
                <p key={index}>
                    {item.name},
                    price: {item.price}
                    <input type="checkbox" checked={item.isChecked} onChange={(e) => changeItemChecked(e, index)}/>
                </p>
            )}
        </div>
    );
}


export default App2;