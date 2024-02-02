<template>
  <div class="login-wrapper">
    <form action="" @submit.prevent="submitForm">
      <div class="form__block">
        <p class="error-msg" v-if="v$.login.$error || v$.password.$error">
          Login or password incorrect
        </p>
        <p>Login:</p>
        <CustomInput type="text" v-model="login" name="login" autocomplete="user-name" />
      </div>

      <div class="form__block">
        <p>Password:</p>
        <CustomInput
          type="password"
          v-model="password"
          name="password"
          autocomplete="current-password"
        />
      </div>

      <div class="form__btns">
        <CustomButton text="login" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import useLogin from '../hooks/useLogin';

export default defineComponent({
  methods: {
    clearForm() {
      this.login = '';
      this.password = '';
    },

    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        this.clearForm();
        return;
      }

      await this.loginUser();
      this.clearForm();

      if (!this.isLoginSuccessful) {
        this.v$.$touch();
        return;
      }
<<<<<<< HEAD
      // My test
      // My test
      // My test
      // My test
=======
>>>>>>> 789e87bd513c595b0e69bff823b1366c6b8b0cb8

      this.$router.push('/');
    },
  },
  setup() {
    const { login, password, isLoginSuccessful, loginUser } = useLogin();

    return { login, password, isLoginSuccessful, loginUser, v$: useVuelidate() };
  },
  validations() {
    return {
      login: { required, minLength: minLength(4) },
      password: { required, minLength: minLength(4) },
    };
  },
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;

  .error-msg {
    color: var(--red);
  }

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-size: 20px;
    }
  }

  .form__btns {
    text-align: center;
  }
}
</style>
