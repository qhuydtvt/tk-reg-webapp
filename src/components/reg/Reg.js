import React, { Component } from 'react';
import RegForm from './Reg.form';
  
class Reg extends Component {
  render() {
    return (
      <div>
        <RegForm
          onSubmit={this.onSubmitRegForm}
          initialValues={{
            "course": {
              "slug": ""
            },
            "kid": {
              "facebook": "",
              "phone": "",
              "mail": "",
              "institude": "",
              "dob": "",
              "name": "",
              "experience": ""
            },
            "connectBy": "",
            "method": "",
            "utm_campaign": "",
            "utm_medium": "",
            "utm_source": ""
          }}
        />
      </div>
    );
  }

  onSubmitRegForm(values) {
    console.log(values);
  }
}
  
  
export default Reg;