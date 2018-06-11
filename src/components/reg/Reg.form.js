import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import  { Formik } from 'formik';

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

    const { name, mail, phone, yob, facebook, work, achievements, source, refer } = values;

    return (
      <Form>
        <FormGroup>
          <Label>Họ và tên</Label>
          <Input
            type='text'
            name='name'
            value={name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Địa chỉ email</Label>
          <Input
            type='text'
            name='mail'
            value={mail}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Số điện thoại</Label>
          <Input
            type='text'
            name='phone'
            value={phone}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Ngày tháng năm sinh</Label>
          <Input
            type='text'
            name='yob'
            value={yob}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Link facebook</Label>
          <Input
            type='text'
            name='facebook'
            value={facebook}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Nơi học tập công tác</Label>
          <Input
            type='text'
            name='work'
            value={work}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Bạn có muốn tham gia học bổng Techkids không ? Nếu có thì ghi rõ thành tích học tập, làm việc của mình vào nhé</Label>
          <Input
            type='textarea'
            name='achievements'
            value={achievements}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Bạn biết đến Techkids qua đâu</Label>
          <Input
            type='text'
            name='sourse'
            value={refer}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Bạn có được học viên cũ/ thành viên giới thiệu không? Ghi rõ link facebook của bạn đó vào đây nhé</Label>
          <Input
            type='text'
            name='refer'
            value={refer}
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