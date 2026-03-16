import React from 'react'
import pawLogo from '../../Paw.svg'

export default function UnderConstructionPopup({ onClose }) {
  return (
    <div className="uc-overlay" role="presentation" onClick={onClose}>
      <div
        className="uc-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="uc-title"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={pawLogo} alt="Paw logo" className="uc-paw" />
        <h3 id="uc-title">⚠️ Under Construction! ⚠️</h3>
        <button type="button" className="cta cta-small project-modal-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}