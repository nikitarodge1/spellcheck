import { useEffect, useState } from "react";

const customDictionary = { teh: 'the', wrok: 'work', fot: 'for', exampl: 'example' };

function SpellCheck() {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const parseSearchArray = search.split(" ");
        const newSuggestions = [];

        for (let i = 0; i < parseSearchArray.length; i++) {
            let item = parseSearchArray[i].toLowerCase();
            if (Object.prototype.hasOwnProperty.call(customDictionary, item)) {
                newSuggestions.push(customDictionary[item]);
            }
        }

        setSuggestions(newSuggestions);
    }, [search]);

    return (
        <div>
            <h2>Spell Check and Auto Correction</h2>
            <textarea
                cols="30"
                rows="10"
                value={search}
                placeholder="Enter text..."
                onChange={handleChange}
            ></textarea>
            {suggestions.length > 0 && (
                <p>
                    Did you mean:{" "}
                    <strong>
                        {suggestions.map((suggestion, index) => (
                            <span key={index}>{suggestion}</span>
                        ))}
                    </strong>
                    ?
                </p>
            )}
        </div>
    );
}

export default SpellCheck;
