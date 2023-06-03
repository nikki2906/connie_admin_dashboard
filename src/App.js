import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import { listNonprofits, editNonprofit, createNonprofit } from './components/Nonprofits'
import { listUsers, editUser, createUser } from './components/Users'
import AdminPanel from './components/AdminPanel'
import NotificationsList from './components/NotificationsList';


function App() {
  return (
    <div className='App'>
      <Admin
      
        dashboard={AdminPanel}
        dataProvider={simpleRestProvider('http://localhost:3000')}
      >
         {/* * The dashboard prop specifies the component (AdminPanel) to be rendered as the dashboard of the admin panel.*/}
         <Resource
          name='nonprofits'
          list={listNonprofits} // Component for listing nonprofits
          edit={editNonprofit} // Component for editing nonprofits
          create={createNonprofit} // Component for creating nonprofits
        />
        <Resource
          name='users'
          list={listUsers} // Component for listing users
          edit={editUser} // Component for editing users
          create={createUser} // Component for creating users
        />
        <Resource name="notifications" list={NotificationsList} /> {/* Component for listing notifications */}
      </Admin>
    </div>
  )
}

export default App