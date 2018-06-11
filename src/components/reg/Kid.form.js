import React from 'react';
import { Input, Label, FormGroup } from 'reactstrap';

export default function(formProps) {
  const {
    values,
    handleChange,
    handleBlur,
  } = formProps;
  const {
    name,
    dob,
    phone,
    facebook,
    mail,
    institude,
    experience
  } = values;
  return (
    <div>
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
            name='dob'
            value={dob}
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
            name='institude'
            value={institude}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Bạn có muốn tham gia học bổng Techkids không ? Nếu có thì ghi rõ thành tích học tập, làm việc của mình vào nhé</Label>
          <Input
            type='textarea'
            name='experience'
            value={experience}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>
    </div>
  );
}