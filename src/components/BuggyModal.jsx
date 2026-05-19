import { useEffect } from 'react'

export default function BuggyModal({ title, children, open, onClose }) {
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose()
    }

    if (!open) return

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">x</button>
        <h2>{title}</h2>
        {children}
      </section>
    </div>
  )
}
