import Link from "next/link";

const AdminNav = () => {
    return ( 
        <nav className="admin_nav">
     <ul>
        <li><Link href="/admin/adminTure"><a>Ture</a></Link></li>
        <li><Link href="/admin/adminRumfaergen"><a>Rumfærgen</a></Link></li>
        <li><Link href="/admin/adminFooter"><a>Footer</a></Link></li>
        <li><Link href="/admin/adminKontakt"><a>Kontakt</a></Link></li>
        <li><Link href="/admin/adminTeam"><a>Team</a></Link></li>
        <li><Link href="/admin/adminNyhedsBrev"><a>Nyhedsbrev</a></Link></li>
     </ul>
    </nav>
     );
}
 
export default AdminNav;