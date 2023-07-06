import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext)
     const location = useLocation()
     if (loading && !user) {
          return (<div className='mt-5 pt-5'>
               <div className="text-center mt-5 pt-5">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
          </div>
          )
     }
    if (user) {
          return children
     }
     return (
          <div>
               <Navigate to='/login' state={{from:location}} replace></Navigate>
          </div>
     );
};

export default PrivateRoute;