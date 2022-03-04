import { useEffect, useRef, useState } from "react";

function CustomInput({ updateLength, showHandler }) {
  const limit = 280;
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [offset, setOffset] = useState(0);
  const textareaRef = useRef();

  const inputHandler = (e) => {
    const innerText = e.currentTarget.innerText;
    updateLength(innerText.length);
    if (innerText.length === 0) {
      setShowPlaceholder(true);
    } else {
      setShowPlaceholder(false);
    }

    if (innerText.length > limit && innerText.length > 0) {
      const allowed = innerText.slice(0, 280);
      const extra = innerText.slice(280);
      const HTML = `<span>${allowed}</span><span style='background:#fb9fa8'>${extra}</span>`;
      e.currentTarget.innerHTML = HTML;

      setCaret(e.currentTarget, 1, 1);
    } else if (innerText.length < limit && innerText.length > 0) {
      const HTML = `<span>${innerText}</span>`;
      e.currentTarget.innerHTML = HTML;
      setCaret(e.currentTarget, 0, 1);
    }
  };

  const onKeyPressHandler = (e) => {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      setOffset(window.getSelection().focusOffset);
      console.log(offset);
    }
  };

  const placeholderClasses = `
  ${showPlaceholder && "flex"}
  ${!showPlaceholder && "hidden"}
  absolute 
  top-3 
  left-0 
  select-none 
  text-xl 
  text-dark-gray
  `;
  return (
    <>
      <div className="w-full flex relative py-3">
        <div className={placeholderClasses}>What's happening?</div>
        <div className="w-full flex break-words">
          <div
            onFocus={showHandler}
            onKeyDown={onKeyPressHandler}
            onInput={inputHandler}
            ref={textareaRef}
            contentEditable="true"
            className="z-10 bg-transparent focus:outline-none grow block text-xl whitespace-pre-wrap break-all"
          ></div>
        </div>
      </div>
    </>
  );
}

export default CustomInput;

function setCaret(el, childNodeIndex, offset) {
  var range = document.createRange();
  var sel = window.getSelection();

  range.setStart(el.childNodes[childNodeIndex], offset);
  range.collapse(true);

  sel.removeAllRanges();
  sel.addRange(range);
}
