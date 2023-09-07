
// generated : 2023-08-07T23:33:01.058Z v3.8.701

  import * as FormTypes from '../../types/FormTypes'
  import * as Schema from './PersonSchema'
  import * as Text from './PersonText'
  import { CommonText } from '../../language/CommonText'
  import { InputTypes } from '../../elements/Input'
  
  export const entityMaintForm: FormTypes.EntityMaintFormType = (
    props: FormTypes.EntityDataProps
  ) => {
    let entityData = props.entityData as Schema.EntityType
    // id={Schema.FieldNameKeys.firstName}
    // defaultValue={entityData.firstName}
    return (
      <div style={{ borderStyle: 'dashed', borderWidth: 1, margin: 8, width: 600 }}>
        <span style={{ fontSize: 25 }}>PersonMaintForm</span>
        <br />
        <span style={{ fontSize: 15 }}> ${Text.Names.displayName} entity-specific form fields</span>
  
        <div style={{ borderStyle: 'inset', borderWidth: 2, margin: 20, width: 500 }}>
          <table>
            <thead>
              <tr>
                <td colSpan={3}>{CommonText.tableHeader}</td>
              </tr>
            </thead>
            <tbody>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>First Name :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="first_name"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Last Name :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="last_name"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Legal Name :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="legal_name"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Familiar Name :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="nick_name"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Region ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="region_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Disambiguation :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="disambiguation"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Previous Names :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="previous_names"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Birth Date :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="birth_date"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Honorific Prefix :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="honorific_prefix"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Honorific Suffix :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="honorific_suffix"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>DUNS :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="duns"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>GLN :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="gln"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Occupation :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="occupation"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Naics :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="naics"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Nationality :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="nationality"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Spouse :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="spouse"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Image :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="image"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>VAT ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="vat_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>GUID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="guid"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Interactions ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="interactions_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Notes ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="notes_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Responsible Role ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="responsible_role_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Responsible Person ID :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="responsible_person_id"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Created By :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="created_by"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Last Modified By :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="last_modified_by"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Created Time :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="created_time"
        type={InputTypes.Text} />
        </td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left', paddingLeft: 15}}>Last Modified Time :</td>
        <td style={{ borderStyle: 'groove', borderWidth: 4, borderColor: 'blue', margin: 5 }}>
        <input id="last_modified_time"
        type={InputTypes.Text} />
        </td>
        </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }  
  
  