import react from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const currentUser = useSelector(store => store.user);

  return(
    <div>
      <h2 className="mb-4">{`Welcome to the Admin Dashboard, ${currentUser.email}`}</h2>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4>Students To Approve</h4>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h4>Tutors To Approve</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h4>Add a new partner</h4>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;