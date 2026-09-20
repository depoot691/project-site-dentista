import { useState } from 'react'
import './SuporteIA.css'

function SuporteIA({ voltarParaInicio }) {
    const [mensagem, setMensagem] = useState('')
    const [mensagens, setMensagens] = useState([
        {
            autor: 'assistente',
            texto: 'Ola! Sou a assistente da Clinica Sorriso. Como posso ajudar hoje?',
            horario: '09:41',
        },
    ])

    const enviarMensagem = (event) => {
        event.preventDefault()
        const texto = mensagem.trim()

        if (!texto) return

        setMensagens((mensagensAtuais) => [
            ...mensagensAtuais,
            { autor: 'usuario', texto, horario: 'agora' },
        ])
        setMensagem('')
    }

    return (
        <main className="suporte-page">
            <section className="suporte-shell">
                <aside className="suporte-sidebar">
                    <div className="suporte-brand">
                        <span className="suporte-brand-mark">+</span>
                        <div>
                            <strong>Sorriso</strong>
                            <span>suporte inteligente</span>
                        </div>
                    </div>

                    <button className="novo-chat-button" type="button">
                        <span>+</span> Nova conversa
                    </button>

                    <div className="conversas-heading">
                        <span>Conversas recentes</span>
                        <span className="conversas-count">1</span>
                    </div>

                    <nav className="conversas-list" aria-label="Conversas recentes">
                        <button className="conversa-item active" type="button">
                            <span className="conversa-icon">S</span>
                            <span className="conversa-info">
                                <strong>Cuidados apos limpeza</strong>
                                <small>Quais cuidados devo ter...</small>
                            </span>
                            <small>agora</small>
                        </button>
                    </nav>

                    <div className="sidebar-footer">
                        <span className="status-dot"></span>
                        Assistente online
                        <button type="button" aria-label="Abrir configuracoes">...</button>
                    </div>
                </aside>

                <section className="chat-panel">
                    <header className="chat-header">
                        <div className="chat-title">
                            <button className="back-button" type="button" onClick={voltarParaInicio}>
                                <span aria-hidden="true">←</span> Voltar para login
                            </button>
                            <div className="assistant-avatar">S</div>
                            <div>
                                <h1>Assistente Sorriso</h1>
                                <p><span className="status-dot"></span> Online agora</p>
                            </div>
                        </div>
                        <div className="chat-actions">
                            <button type="button" aria-label="Pesquisar conversa">⌕</button>
                            <button type="button" aria-label="Mais opcoes">...</button>
                        </div>
                    </header>

                    <div className="chat-content">
                        <div className="chat-date"><span>Hoje</span></div>
                        <div className="message-list">
                            {mensagens.map((item, index) => (
                                <div className={`message-row ${item.autor}`} key={`${item.horario}-${index}`}>
                                    {item.autor === 'assistente' && <div className="message-avatar">S</div>}
                                    <div className="message-bubble-wrap">
                                        <div className="message-bubble">{item.texto}</div>
                                        <span className="message-time">{item.horario}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="chat-composer" onSubmit={enviarMensagem}>
                        <button className="composer-icon" type="button" aria-label="Anexar arquivo">+</button>
                        <input
                            type="text"
                            value={mensagem}
                            onChange={(event) => setMensagem(event.target.value)}
                            placeholder="Digite sua mensagem..."
                            aria-label="Mensagem"
                        />
                        <button className="send-button" type="submit" aria-label="Enviar mensagem">↑</button>
                    </form>
                    <p className="chat-disclaimer">A assistente pode cometer erros. Para diagnosticos, consulte um profissional.</p>
                </section>
            </section>
        </main>
    )
}

export default SuporteIA;
