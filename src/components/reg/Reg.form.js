import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import  { Formik } from 'formik';

import KidForm from './Kid.form';
import { nestFmkProps } from 'nestFmk';


class RegForm extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  validate(values) {
    const errors = {};
    return errors;
  }

  renderForm(formProps) {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = formProps;

    const { utm_medium, utm_source } = values;

    return (
      <Form onSubmit={handleSubmit}>
        <KidForm {...nestFmkProps(formProps, 'kid')} /> 
        <FormGroup>
          <Label>Bạn biết đến Techkids qua đâu</Label>
          <Input
            type='text'
            name='utm_medium'
            value={utm_medium}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Bạn có được học viên cũ/ thành viên giới thiệu không? Ghi rõ link facebook của bạn đó vào đây nhé</Label>
          <Input
            type='text'
            name='utm_source'
            value={utm_source}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <i>Bạn sẽ được giảm ngay 5% học phí nếu bạn được thành viên, học viên của ILIAT school và Techkids giới thiệu, như một lời cảm ơn chân thành nhất vì bạn đã tin tưởng và lựa chọn Techkids</i>
        </FormGroup>
        <h3>Bắt đầu chuyến hành trình đáng nhớ của bạn NGAY HÔM NAY</h3>
        <Button color="primary">Đăng ký học</Button>
      </Form>
    );
  }

  render() {
    return (
      <Formik
        initialValues={this.props.initialValues}
        validate={this.validate}
        onSubmit={this.props.onSubmit}
        render={this.renderForm}
      />
    );
  }
}

export default RegForm;