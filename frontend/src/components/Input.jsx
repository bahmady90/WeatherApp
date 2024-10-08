import { useState } from "react";
import { deUmlaut, getCities } from "../functions"
import useOutsideClick from "../useOutsideClick";


export default function Input({setPosition, position}) {

    const [options, setOptions] = useState([]);
    const [error, setError] = useState("");
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(0);

    // logic to close the options-list when the user clicks outside the inputfield
    const [focusInput, setFocusInput] = useState(false);
    const ref = useOutsideClick(() => setFocusInput(false));

    async function handleChange(e){
        const input = e.target.value;
        setInputValue(deUmlaut(input));
        const options = await getCities(deUmlaut(input));
        //Attempt to handle wrong user-input
        if(options.length === 0){
            setError("Keine passende Stadt gefunden");
            setOptions([]);
            setInputValue("");
        }
        else{
             setOptions(options);
             setError("");
            }   
    }

    function handleBlur(e){
        // makening sure the input-focus doesn´t go away after selecting a city
        if (e.relatedTarget === null) {
            e.target.focus();
        }
    }

    function handleClick(option){
        const {city, country} = option;
        setInputValue(`${city}, ${country}`);
        setOptions(() => [option]);
        if(options.length >= 1){
            const {lat, long} = option;
            const pos = {lat, long};
            // checking if the inputed city is already displayed
            if(pos.lat === position?.lat && pos.long === position?.long){
                console.log("object");
                setError("Diese Stadt ist bereits ausgewählt");
                setOptions([]);
                setInputValue("");
            }
            else {
                setPosition(pos);
            }
        }
        

    }

    function handleSubmit(e){
        e.preventDefault();
        if(options.length >= 1){
            const {lat, long} = options[0];
            const pos = {lat, long};
            // checking if the inputed city is already displayed
            if(pos.lat === position?.lat && pos.long === position?.long){
                console.log("object");
                setError("Diese Stadt ist bereits ausgewählt");
                setOptions([]);
                setInputValue("");
            }
            else {
                setPosition(pos);
            }
        }
        
    }

  return (
    <>
        <form 
            ref={ref} 
            className="flex flex-col mb-4 sm:mb-2 " 
            onSubmit={(e) => handleSubmit(e)}
        >
        <input
            onClick={() => setFocusInput(true)}
            className="w-64 h-12 sm:w-[500px] sm:h-[40px] mb-0 rounded-lg p-1 pl-2 focus:outline-none focus:border-black focus:shadow-slate-700 focus:shadow-sm bg-gray-100 border-slate-800 border-[1px] placeholder-gray-700"
            type="text"  value={inputValue} placeholder="Such nach einer Stadt..." 
            onChange={(e) => handleChange(e)} 
            onBlur={(e) => handleBlur(e)}
        />
        {error && <p className="text-red-500 font-semibold mt-2 ml-2">{error}</p>}
        {(options.length > 0 && focusInput === true) &&
            <ul 
                id="autocomplete-list"
                className=" p-2 text-sm flex flex-col rounded-lg rounded-t-none m-1 mt-0 bg-gradient-to-r from-slate-50 to-gray-100 border-[1px] border-t-0 border-black"
                >
                {options.map((option, index) =>{
                    const {city, country, id} = option;
                    return <li 
                        className={`${selectedOption === index && "text-lg font-semibold"} text-base my-[2px] cursor-pointer`}
                        key={id} 
                        onClick={() => handleClick(option)}
                        onMouseEnter={() => setSelectedOption(index)}
                        onMouseLeave={() => setSelectedOption(0)} 
                        >
                            {`${city}, ${country}`}
                        </li> 
                }    
                )}
                
                
            </ul>
        }
        </form>
    </>
  )
}
