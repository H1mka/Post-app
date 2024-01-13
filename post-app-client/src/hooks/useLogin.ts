import { ref, Ref } from 'vue';
import store from '../store/store';
import axios from 'axios';

const useLogin = () => {
  const login: Ref<String> = ref('');
  const password: Ref<String> = ref('');
  const isLoginSuccessful: Ref<Boolean> = ref(false);

  const loginUser = async () => {
    const response = await axios.post('http://localhost:8080/api/login', {
      login: login.value,
      password: password.value,
    });

    console.log(response.data);

    if (response.data.message !== 'success') return;

    isLoginSuccessful.value = response.data.isLogin; // ?
    store.commit('setAuth', true);
    store.commit('setUser', response.data.user);
    localStorage.setItem('token', response.data.token);
  };

  return {
    login,
    password,
    isLoginSuccessful,
    loginUser,
  };
};

export default useLogin;
