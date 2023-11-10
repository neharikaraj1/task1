import React,{useState} from "react";
import './styles.css'
const Wordcounter = ()=>{
  const [paragraph, setParagraph] = useState('')
  const updateWordCount =() =>{
    const words = paragraph.split(/\s+/).filter(word => word !=='')
    return words.length;
  };
  const handleTxtareaChange = (e) => {
    setParagraph(e.target.value);
  };
  return(
    <div className="container">
      <p className="title">Responsive Paragraph Word Counter</p>
      <textarea classname="para" value={paragraph}
      onChange={handleTxtareaChange} placeholder="Type or Paste your paragraph here"></textarea>
      <p className="out">
        Word Count : <span>{updateWordCount()}

        </span>
      </p>
    </div>
  );
};
export default Wordcounter