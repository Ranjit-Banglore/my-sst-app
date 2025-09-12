function ShowFruites() {

    const fruits = ["Apple", "Banana", "Orange", "Mango", "Coconut"]

    return (
        <div>
            {fruits.map(fruit => (
                <ul>
                    <div key={fruit}>{fruit}</div>
                </ul>
            ))}
        </div>
    );
}

export default ShowFruites;