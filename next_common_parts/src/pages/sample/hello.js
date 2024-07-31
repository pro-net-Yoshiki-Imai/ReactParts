// pages/hello.js

import Link from "next/link";

export default function hello(){
  return (
    <div>
        <h1>Hello in Sample</h1>
        <Link href="/">Back to Home</Link>
    </div>
  )
}
