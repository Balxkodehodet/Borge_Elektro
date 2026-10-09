export default function Kontakt(): React.JSX.Element {
    return (
        <div className="kontakt-page">
            <h1>Kontakt oss</h1>
            <p>Her kan du kontakte oss for spørsmål eller forespørsler.</p>
            <form>
                <label htmlFor="name">Navn:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">E-post:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Melding:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send melding</button>
            </form>
        </div>
    );
}