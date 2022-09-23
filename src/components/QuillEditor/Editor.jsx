import React, { useEffect, useRef, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactQuill, { Quill, editor } from 'react-quill'
// import ImageResize  from 'quill-image-resize-module';
import 'react-quill/dist/quill.snow.css'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import CustomToolbar from './CustomToolbar'
import { crudActions } from '../../store/crud-slice'

window.katex = katex

// Quill.register('modules/ImageResize',ImageResize);
const Editor = (props) => {
   const dispatch = useDispatch()
   const { editorValue } = useSelector((state) => state.crud)

   const handleChange = (html) => {
      dispatch(crudActions.changeTextEditor(html))
      props.change(html)
   }
   const modules = {
      toolbar: {
         container: '#toolbar',
      },
   }
   const formats = [
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'color',
      'background',
      'script',
      'header',
      'blockquote',
      'code-block',
      'indent',
      'list',
      'direction',
      'align',
      'link',
      'image',
      'video',
      'formula',
   ]

   return (
      <>
         <GlobalStyle />
         <CustomToolbar />
         <ReactQuill
            value={editorValue}
            onChange={handleChange}
            modules={modules}
            formats={formats}
         />
      </>
   )
}
const GlobalStyle = createGlobalStyle`
	.ql-container.ql-snow {
		border: none;
		background-color: #21262c;
		border-radius: 6px;
		.ql-editor{
			p{
				color: white;
			}
         ul,ol{
            color: white;
         }
		}
	}
`

export default Editor
