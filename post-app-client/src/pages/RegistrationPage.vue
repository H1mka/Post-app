<template>
  <div class="login-wrapper">
    <form action="" @submit.prevent="submitForm">
      <div class="form__block">
        <p class="error-msg" v-if="v$.login.$error">Length must be greater than 4</p>
        <p>Login:</p>
        <CustomInput type="text" v-model="login" name="login" autocomplete="user-name" />
      </div>

      <div class="form__block">
        <p class="error-msg" v-if="v$.password.$error">Length must be greater than 6</p>
        <p>Password:</p>
        <CustomInput
          type="password"
          v-model="password"
          name="password"
          autocomplete="current-password"
        />
      </div>

      <div class="form__block">
        <p class="error-msg" v-if="v$.repeatPassword.$error">Length must be greater than 6</p>
        <p class="error-msg" v-if="!isPasswordsEqual">Passwords must be the same</p>
        <p>Repeat Password:</p>
        <CustomInput
          type="password"
          v-model="repeatPassword"
          name="repeat-password"
          autocomplete="new-password"
        />
      </div>

      <div class="form__block">
        <p>First name:</p>
        <p class="error-msg" v-if="v$.first_name.$error">Length must be greater than 4</p>
        <CustomInput type="text" v-model="first_name" name="password" autocomplete="first-name" />
      </div>

      <div class="form__block">
        <p>Last name:</p>
        <p class="error-msg" v-if="v$.last_name.$error">Length must be greater than 4</p>
        <CustomInput type="text" v-model="last_name" name="password" autocomplete="last-name" />
      </div>

      <div class="form__btns">
        <CustomButton text="login" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useRegistration from '../hooks/useRegistration';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default defineComponent({
  data() {
    return {
      isPasswordsEqual: true,
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();

      if (!isFormCorrect) return;

      if (this.password !== this.repeatPassword) {
        this.isPasswordsEqual = false;
        this.repeatPassword = '';
        return;
      } else this.isPasswordsEqual = true;

      this.registrateUser();
      this.$router.push('/login');
    },
  },
  setup() {
    const { login, password, repeatPassword, first_name, last_name, registrateUser } =
      useRegistration();

    return {
      login,
      password,
      repeatPassword,
      first_name,
      last_name,
      registrateUser,
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
      login: { required, minLength: minLength(4) },
      password: { required, minLength: minLength(4) },
      repeatPassword: { required, minLength: minLength(4) },
      first_name: { required, minLength: minLength(4) },
      last_name: { required, minLength: minLength(4) },
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
