import React from 'react'
import './LoadingSpinner.css'

export default function LoadingSpinner() {
    return (
      <>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
}
