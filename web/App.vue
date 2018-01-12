<template>
  <div id="app">
    <y-container>
      <y-row>
        <y-col :col="6" :md="6">
          <div class="demo-card">
            <h1>用户表单</h1>
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
          </div>
        </y-col>
        <y-col :col="6" :md="6">
          <div class="demo-card">
            <h1>Data</h1>
            {{ user }}
          </div>
        </y-col>
      </y-row>
    </y-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        user: {
          username: 'sy',
          age: 18,
          gender: 1,
          type: 'admin'
        },
        options: [
          { label: '管理员', val: 'admin' },
          { label: '成员', val: 'member' }
        ],
        rules: {
          username: [
            { required: true, message: '请输入用户名' }
          ],
          age: [
            { type: 'number', required: true, message: '请输入年龄' }
          ],
          type: [
            { required: true, message: '请选择角色' }
          ]
        }
      }
    },
    created () {

    },
    methods: {
      onsubmit () {
        this.$refs['userForm'].validate((valid) => {
          if (valid) {
            alert(JSON.stringify(this.user))
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm () {
        this.$refs['userForm'].resetForm()
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 30px;
  }
  .demo-card {
    border: 1px solid #dedede;
    border-radius: 4px;
    box-shadow: 3px 3px 3px #e8e8e8;
    padding: 20px;
    height: 500px;
  }
  h1 {
    text-align: center;
    color: #606266;
    margin-bottom: 20px;
  }
</style>
