
import Link from 'next/link'
function Navbar() {
 
  return (
    <nav  >
      <ul >
      
        
        <li>
          <Link href='/'>
            <a>Click here to show All Invoices, you can add new invoice</a>
          </Link>
        </li>
          
      </ul>
    </nav>
  )
}

export default Navbar