import React, { useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { EditorState, convertToRaw, ContentState} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import { useGlobalState } from "..";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const Editorjs = (props) => {

  const [convertedContent, setConvertedContent] = useGlobalState('description');
  const [editorState, setEditorState] = useState({
    en: EditorState.createEmpty(),
    fr: EditorState.createEmpty()
  });

  const stateHandler = (lang) => {
    const blocksFromHtml = htmlToDraft(convertedContent[lang]);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    return EditorState.createWithContent(contentState)
  }

  useEffect(() => {
    setEditorState({
      fr: stateHandler('fr'),
      en: stateHandler('en')  
    })
  }, [convertedContent.fromAPI])

  const toolbarOptions = {
    options: ["inline", "fontSize", "image", "emoji"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };
  

  useEffect(() => {
    convertContentToHTML();
  }, [editorState])
  

  const handleEditorChange = (state) => {
      setEditorState({
        ...editorState,
        [props.language]: state,
      })
  };


  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(convertToRaw(editorState[props.language].getCurrentContent()))
    if (currentContentAsHTML !== "<p></p>\n"){
      setConvertedContent({
        ...convertedContent,
        [props.language]: currentContentAsHTML
      });
    }
  };
  return (
    <>
      <Editor
        onEditorStateChange={handleEditorChange}
        editorState={editorState[props.language]}
        defaultEditorState={editorState[props.language]}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          fontFamily: {
            options: ['Franklin Gothic', 'Chaparral', 'Silk serif'],
          }}
        }
      />
    </>
  );
};

export default Editorjs;