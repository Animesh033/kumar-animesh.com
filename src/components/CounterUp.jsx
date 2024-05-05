import { useEffect, useRef } from 'react'

export default function CounterUp(props) {
    
  // create a ref and declare an instance for each countUp animation
  const countupRef = useRef(null);
  let countUpAnim;
  
  // useEffect with empty dependency array runs once when component is mounted
  useEffect(() => {
    initCountUp();
  },[]);

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  async function initCountUp() {
    const countUpModule = await import('countup.js');
    countUpAnim = new countUpModule.CountUp(countupRef.current, props.max, {
        duration: props.duration
    });
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }
  
  // in the jsx use the ref attribute to bind the element to `countupRef`
  return (
    <>
      <span ref={countupRef}></span>
    </>
  );
}