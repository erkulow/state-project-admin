/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { createGlobalStyle } from 'styled-components'
import { Controller } from 'react-hook-form'
import CustomToolbar from './CustomToolbar'

window.katex = katex

const Editor = (props) => {
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
      <div
         style={{
            opacity: props.disabled ? '0.5' : 1,
            pointerEvents: props.disabled ? 'none' : '',
         }}
      >
         <GlobalStyle />
         <CustomToolbar />
         <Controller
            name={props.name}
            control={props.control}
            rules={props.required}
            render={({ field }) => {
               if (field.value === '<p><br></p>')
                  props.setValue(field.name, null)
               return (
                  <ReactQuill {...field} modules={modules} formats={formats} />
               )
            }}
         />
      </div>
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
      .ql-editor{
         min-height: 150px;
      }

	}
`

export default Editor
