import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("");

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to uppercase!", "success")
    }

    let handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted to lowercase!", "success")
    }


    let handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        // writes the specified text string to the system clipboard
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        // regex is used here
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success")
    }

    return (
        <>
            <div className={`container ${props.mode === "light" ? "text-dark" : "text-light"}`}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea style={{ backgroundColor: props.mode !== "light" && "rgb(178 175 201)", color: props.mode !== "light" ? "white" : "black" }} className="form-control" id="myBox" value={text} onChange={handleChange} rows="8" placeholder="Enter text here" ></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2 my-2`} onClick={handleUpClick}>convert to uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2 my-2`} onClick={handleLwClick}>convert to lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2 my-2`} onClick={handleCopy}>copy the text</button>
                <button disabled={text.length===0} className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2 my-2`} onClick={handleExtraSpaces}>remove extra spaces</button>
            </div>
            <div className={`container my-2 ${props.mode === "light" ? "text-dark" : "text-light"}`}>
                <h1>Your text summary</h1>
                {/* The \s (lowercase s ) matches a whitespace (blank, tab \t , and newline \r or \n ). On the other hand, the \S+ (uppercase S ) matches anything that is NOT matched by \s , i.e., non-whitespace. */}
                <p>{text.split(/\s+/).filter((el)=>{return el.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}

export default TextForm;