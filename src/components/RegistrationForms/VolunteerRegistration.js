import React from 'react';
import UserFields from './UserFields';

export default function VolunteerRegistration(props) {
  return (
    <div>
      <UserFields
        addTempValidation={props.addTempValidation}
        addTempValue={props.addTempValue}
        errorProps={props.errorProps}
      />
    </div>
  );
}
