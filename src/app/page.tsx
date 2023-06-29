import { hstack } from '@styles/patterns'
// import { hstack } from '../../generated/panda-css/patterns'
import { css, cx } from '@styles/css'

export default function Home() {
  return (
    <main >
      <div className={cx(css({color: "red"}), hstack())}>
      <span>This</span>
      <span>Should</span>
      <span>Have</span>
      <span>Spacing</span>
      </div>
    </main>
  )
}
