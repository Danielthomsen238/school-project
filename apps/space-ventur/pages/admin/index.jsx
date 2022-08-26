import AdminNav from "../../components/AdminNav";


const AdminPanel = () => {
    return ( 
    <section className="admin_container">
    <section className="admin_info">
    <h2>Velkommen til Admin panel</h2>
     <p>her vil du kunne opret/ret/slet data i Ture, Rumfærgen og Footer. Klik på en side du vil ændre data i.</p>
    </section>
    <AdminNav />    
     </section>);
}
AdminPanel.auth = true
export default AdminPanel;