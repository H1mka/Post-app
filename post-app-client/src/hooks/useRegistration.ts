import { ref, Ref } from 'vue';
import axios from 'axios';

const useRegistration = () => {
  const login: Ref<string> = ref('');
  const password: Ref<string> = ref('');
  const repeatPassword: Ref<string> = ref('');
  const first_name: Ref<string> = ref('');
  const last_name: Ref<string> = ref('');

  const registrateUser = async () => {
    try {
      const user = {
        login: login.value,
        password: password.value,
        first_name: first_name.value,
        last_name: last_name.value,
      };

      const response = await axios.post('http://localhost:8080/api/registration', user);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    password,
    repeatPassword,
    first_name,
    last_name,
    registrateUser,
  };
};

export default useRegistration;
