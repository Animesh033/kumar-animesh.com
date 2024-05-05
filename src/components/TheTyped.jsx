import {useRef, useEffect} from 'react';
import Typed from 'typed.js';

function TheTyped(props) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // console.log(props)

  const {typedText, typeSpeed, loop, cursorChar} = props
  const typedTexts = typedText.split(',')
  // console.log(typedTexts)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typedTexts ?? [],
      typeSpeed: typeSpeed ?? 50,
      loop: loop ?? false,
      cursorChar: cursorChar ?? "|"
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={el} />
    </>
  );
}

export default TheTyped;