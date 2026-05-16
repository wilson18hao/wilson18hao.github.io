import './HeroWireframe.css'

export function HeroWireframe() {
  return (
    <div className="wireframe" aria-hidden="true">
      <div className="wireframe__toolbar">
        <span className="wireframe__dot" />
        <span className="wireframe__dot" />
        <span className="wireframe__dot" />
      </div>
      <div className="wireframe__chart">
        <div className="wireframe__bar" style={{ height: '40%' }} />
        <div className="wireframe__bar" style={{ height: '70%' }} />
        <div className="wireframe__bar wireframe__bar--accent" style={{ height: '55%' }} />
        <div className="wireframe__bar" style={{ height: '85%' }} />
        <div className="wireframe__bar" style={{ height: '45%' }} />
      </div>
      <div className="wireframe__rows">
        <div className="wireframe__row" />
        <div className="wireframe__row wireframe__row--short" />
        <div className="wireframe__row" />
      </div>
    </div>
  )
}
