import Link from 'next/link'
import Article from '../layout/Article'

export default function Account() {
  return (
    <div>
      <p>This is the Account page.</p>
      <p>
        <Link href="/">
          <a>Go: Home</a>
        </Link>
      </p>
    </div>
  )
}

Account.Layout = Article
