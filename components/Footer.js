import Link from 'next/link'

const Footer = React.memo(() => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="container flex items justify-between flex-wrap bg-black max-w-full mx-auto px-8 py-10">
      <div class="flex text-white leading-loose">
        GroceryTime is designed and developed with care in Montreal. Copyright © {year} Brad Purchase
      </div>
      <ul class="flex mt-4 md:mt-0 text-white">
        <li class="mr-8"><Link href="/">About</Link></li>
        <li class="mr-8"><Link href="/">Privacy</Link></li>
        <li class="mr-8"><Link href="mailto:feedback@grocerytime.app">Feedback</Link></li>
        <li class=""><Link href="mailto:support@grocerytime.app">Support</Link></li>
      </ul>
    </div>
  )
})

export default Footer
