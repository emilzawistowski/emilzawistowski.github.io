const KEYWORDS = new Set([
  'attention',
  'organisation',
  'segregation',
  'behavioural',
  'neurophysiological',
  'computational',
])

const BREAK_AFTER = new Set(['attention,'])

export function StatementText({ text }: { text: string }) {
  const sentences = text.split(/(?<=\.)\s+/)
  let counter = 0
  return (
    <p className="identity-description">
      {sentences.map((sentence, si) => (
        <span key={si} className="statement-sentence">
          {sentence.split(/\s+/).map((word, wi, arr) => {
            const key = word.toLowerCase().replace(/[^a-z]/g, '')
            const chip = KEYWORDS.has(key) ? 'statement-chip' : null
            const delay = counter++ * 28
            return (
              <span key={wi}>
                <span
                  className={`statement-word${chip ? ` ${chip}` : ''}`}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {word}
                </span>
                {wi < arr.length - 1 ? (
              <>
                {BREAK_AFTER.has(word) && <br className="statement-br" />}{' '}
              </>
            ) : (
              ''
            )}
              </span>
            )
          })}
        </span>
      ))}
    </p>
  )
}
