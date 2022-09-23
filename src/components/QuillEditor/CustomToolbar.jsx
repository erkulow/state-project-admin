/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import formats from './ToolbarOptions'

const renderOptions = (formatData) => {
   const { className, options } = formatData
   return (
      <select className={className}>
         <option selected="selected" />
         {options.map((value, i) => {
            return <option key={i} value={value} />
         })}
      </select>
   )
}
const renderSingle = (formatData) => {
   const { className, value } = formatData
   return <button className={className} value={value} />
}
const CustomToolbar = () => (
   <div style={{ border: 'none' }} id="toolbar">
      {formats.map((classes, i) => {
         return (
            <span key={i} className="ql-formats">
               {classes.map((formatData) => {
                  return formatData.options
                     ? renderOptions(formatData)
                     : renderSingle(formatData)
               })}
            </span>
         )
      })}
   </div>
)
export default CustomToolbar
