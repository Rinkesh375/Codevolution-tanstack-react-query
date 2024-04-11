import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/super-heroes'>Traditional Super Heroes</Link>
      </li>
      <li>
        <Link href='/rq-super-heroes'>RQ Super Heroes</Link>
      </li>

      <li>
        <Link href='/rq-super-heroes-second'>RQ Super Heroes 2</Link>
      </li>

      <li>
        <Link href='/parallel-queries'>Parallel Queries Fetching</Link>
      </li>

      <li>
        <Link href='/depedent-queries'>Series One After Another Queries Fetching</Link>
      </li>
      
      <li>
        <Link href='/pagination-with-previous-data'>Pagination With Previous Data</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar