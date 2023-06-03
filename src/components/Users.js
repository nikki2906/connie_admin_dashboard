import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from 'react-admin'

export const listUsers = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='phone_number' />

      <EditButton basePath='/users' />
    </Datagrid>
  </List>
)

export const editUser = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='phone_number' />
    </SimpleForm>
  </Edit>
)

export const createUser = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='phone_number' />
    </SimpleForm>
  </Create>
)