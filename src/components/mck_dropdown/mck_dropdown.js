import React, { useRef } from 'react'
import './mck_dropdown.css'

const Dropdown = ({ options, labelname }) => {

    const [toggle, setToggle] = React.useState(false)
    const [selected, setSelected] = React.useState('-- Bitte wählen --')

    function selectItem(option){
        setSelected(option);
        setToggle(!toggle);
    }
 

    function eventhandler(key){

        let select = 

        console.log('pressed key: ', key.key);
            switch (key.key){
                case 'ArrowUp': // take first or above;
                case 'ArrowRight': break; // take first or above;
                case 'ArrowDown': ; // take first or next;
                case 'ArrowLeft': break; // take first or next;
                case 'Enter': break;// select
                case 'Escape': break;// close
                default: break; 
            }
    }

    const dropdown = useRef(null)

    React.useEffect(() => {
        dropdown.current.addEventListener('keyup', eventhandler);
        // return ()=> dropdown.current.removeEventListener('keyup', eventhandler);
    },[])



    return (
        <div 
            ref={dropdown} 
            className="mck-dropdown-wrapper"
            onBlur={() => setToggle(false)}
        > 
            <span className="mck-dropdown-label">{labelname}</span>
            <div tabIndex="0" className="mck-dropdown-container">
                <div onClick={() => setToggle(!toggle)} className="mck-dropdown-select-box">
                    <span>{ selected }</span>
                    <span className={toggle ? "caret-up" : "caret-down"}></span>
                </div>
                <ul className={`mck-dropdown-select-container ${toggle ? 'show' : ''}`}>
                   <li hidden>-- Bitte wählen --</li>
                   { options && options.length > 0 && options.map((option, index) => (
                       <li key={index} tabIndex="0" onClick={() => selectItem(option)}>{ option }</li>
                   )) } 
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;