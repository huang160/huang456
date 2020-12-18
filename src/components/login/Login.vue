<template>
  <div id="tableLogin">
    <div id="container">
      <header>排课系统</header>
      <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
              placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
              type="password"
              placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
      <footer>Copyright ©2018-2020 Power by 华软校园助手. All Rights Reserved.</footer>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {Form, Input, Button, Icon} from 'ant-design-vue'

Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)

export default {
  name: 'Login',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
<style scoped>
#components-form-demo-normal-login{
  position: absolute;
  left: 0;
  top: 5rem;
  bottom: 0;
  right: 0;
  margin:0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 200px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
header{
  position: relative;
  text-align: center;
  line-height: 50px;
}
footer{
  text-align: center;
}
</style>