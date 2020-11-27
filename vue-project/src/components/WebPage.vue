<template>
  <div id=#app>
    <div>
      <img src="../assets/8508a68.png" class="logo">
      <div class="login">
        <input class="loginID" type="text" v-model="text" placeholder="   ID">
      </div>
      <div class="login">
        <input class="loginPW" type="password" placeholder="   Password">
        <button class="loginBtn">SIGN IN</button>
        <div class="left" @click="seekPassword">Forgot password?</div>
        <div class="right" v-on:click="alertAccount">Create an account</div>
      </div>
    </div>
       <Modal v-if="this.$store.state.showModal" @close="this.$store.state.showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
        <div slot="header">
          <div class="right2"></div>
          <i class="closeModalBtn fas fa-times" style="font-size:0.1em; color:#b6b6b6;" @click="seekPassword()"></i>
          <h5>비밀번호 찾기</h5>
          <div class="seek">
            <input class="seekID" type="text" placeholder="   아이디">
            <input class="seekEM" type="email" placeholder="   이메일">
            <button class="submit">전송</button>
            <input class="seekCode" type="text" placeholder="   코드입력">
            <div>
              <button class="nextBtn">다음</button>
            </div>
          </div>
        </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    alertAccount() {
      alert('버튼을 클릭했습니다.')
    },
    seekPassword() {
      this.$store.commit('closeModal');
    },

  },
  components: {
    Modal
  }  
}
</script>

<style>
div.seek {
  width: 260px;
  margin: 0 auto;
}
.seekID, .seekCode, .seekEM, .nextBtn, .submit {
  height: 43px;
  margin: 5px 0 0;
  border: 1px solid rgba(221, 221, 221, 0.986);
  border-radius: 1px;
  background-color: #fff;
  box-sizing: border-box;
}
.seekID, .seekCode, .nextBtn {
  width: 260px;
}
.nextBtn, .submit {
  color: #fff;
  background-color: #26439a;
  font-size: 0.3em;
}
.submit {
  width: 76px;
  margin-left: 7px;
}
.seekEM {
  width: 177px;
}
.seekCode {
  margin-bottom: 4px;
}

h5 {
  margin-top: 2px;
  text-align: center;
  color: #26439a;
}
input:focus {
  outline:none;
}
input::placeholder {
  color:#b9c0ca;
  font-size: 0.8em;
  font-weight: bold;
}
.loginBtn{
  background-color: #26439a;
  color: #fff;
  width: 350px;
  height: 45px;
  margin: 3px 0 0;
  border: 1px solid rgba(221, 221, 221, 0.986);
  border-radius: 1px;
  box-sizing: border-box;
  font-size: 0.7em;
}
.loginID, .loginPW {
  width: 350px;
  height: 45px;
  margin: 3px 0 0;
  border: 1px solid rgba(221, 221, 221, 0.986);
  border-radius: 1px;
  background-color: #fff;
  box-sizing: border-box;
}

.right2 {
  display: inline-block;
  width: 275px;
}
.closeModalBtn {
  margin-top: 20px;
}
div.left {
  display: inline-block;
  width: 261px;
  text-align: left;
  font-size: 0.5em;
  margin-bottom: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #939393;
}
div.right {
  display: inline-block;
  font-size: 0.5em;
  font-weight: bold;
  cursor: pointer;
  }
div.login {
  width: 350px;
  margin: 0 auto;
  margin-bottom: 3px;
}

div.sign {
  width: 320px;
  margin: 0 auto;
  margin-bottom: 8px;
}

img.logo {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 153.6px;
  height: 112.8px;
}
</style>