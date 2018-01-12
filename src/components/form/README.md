# form

**created by [sy](https://github.com/286506460)**

**Form**

> Introduction...

## API

* props

1. model - 表单对象
2. rules - 表单验证规则

* events


* methods

1. resetForm - 表单重置为初始值
2. validate - 表单验证

## Example

```
<y-form :model="user" style="width: 500px" ref="userForm" :rules="rules">
  <y-form-item label="用户名" label-width="100px" prop="username">
    <y-input name="username" placeholder="请输入用户名" v-model="user.username"></y-input>
  </y-form-item>
  <y-form-item label="年龄" label-width="100px" prop="age">
    <y-input name="age" placeholder="请输入年龄" v-model="user.age" type="number"></y-input>
  </y-form-item>
  <y-form-item label="性别" label-width="100px" prop="gender">
    <y-radio label="1" v-model="user.gender">男</y-radio>
    <y-radio label="2" v-model="user.gender">女</y-radio>
  </y-form-item>
  <y-form-item label="角色" label-width="100px" prop="type">
    <y-select :options="options" v-model="user.type" opt-label="label" opt-value="val"></y-select>
  </y-form-item>
  <y-form-item label-width="100px">
    <y-button @click="onsubmit">Submit</y-button>
    <y-button @click="resetForm">Reset</y-button>
  </y-form-item>
</y-form>
```
