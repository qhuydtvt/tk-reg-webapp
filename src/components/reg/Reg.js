import React, { Component } from 'react';
import RegForm from './Reg.form';

import { postRegistration } from 'networks/reg';

class Reg extends Component {
  constructor(props) {
    super(props);
    this.onSubmitRegForm = this.onSubmitRegForm.bind(this);
  }

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
    const courseSlug = this.props.match.params.courseSlug;
    postRegistration({
      ...values,
      course: {
        slug: courseSlug
      }
    })
    .then((reg) => {
      console.log(reg)
    })
    .catch(() => {
      console.log("Error")
    });
  }
}
  
  
export default Reg;