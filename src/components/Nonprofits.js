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

export const listNonprofits = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='cause' />
      <TextField source='point_of_contact' />
      <TextField source='phone_number' />
      <EditButton basePath='/nonprofits' />
    </Datagrid>
  </List>
)

export const editNonprofit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='cause' />
      <TextInput source='point_of_contact' />
      <TextInput source='phone_number' />
    </SimpleForm>
  </Edit>
)

export const createNonprofit = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='cause' />
      <TextInput source='point_of_contact' />
      <TextInput source='phone_number' />
    </SimpleForm>
  </Create>
)
