import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

export default function Support({ search = '' }) {
  const [tickets, setTickets] = useState([
    { id: 1, title: 'Client cannot export report', priority: 'High' },
    { id: 2, title: 'Invoice duplicate after refresh', priority: 'Medium' },
    { id: 3, title: 'Mobile menu overlaps content', priority: 'Low' }
  ])
  const [title, setTitle] = useState('')

  function addTicket() {
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return
    setTickets((currentTickets) => [
      { id: Date.now(), title: trimmedTitle, priority: 'Low' },
      ...currentTickets
    ])
    setTitle('')
  }

  const query = search.toLowerCase()
  const visibleTickets = tickets.filter((ticket) =>
    [ticket.title, ticket.priority]
      .join(' ')
      .toLowerCase()
      .includes(query)
  )

  return (
    <>
      <PageHeader eyebrow="Helpdesk" title="Support" description="Ticket creation and filtering page." />
      <article className="prose prose-2xl max-w-none panel">
        <h2>How tickets work</h2>
        <p>
          Use the composer below to log a new issue. Each ticket is triaged by priority so the team can respond in the
          right order.
        </p>
        <ul>
          <li>
            <strong>High</strong> — production outages or blocked revenue.
          </li>
          <li>
            <strong>Medium</strong> — degraded experience with a workaround.
          </li>
          <li>
            <strong>Low</strong> — polish, questions, or non-urgent improvements.
          </li>
        </ul>
      </article>
      <section className="panel ticket-composer">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New ticket title" />
        <button onClick={addTicket} disabled={!title.trim()}>Add ticket</button>
      </section>
      <section className="ticket-list">
        {visibleTickets.map((ticket) => (
          <article className="ticket" key={ticket.id}>
            <strong>{ticket.title || 'Untitled ticket'}</strong>
            <span>{ticket.priority}</span>
          </article>
        ))}
      </section>
    </>
  )
}
