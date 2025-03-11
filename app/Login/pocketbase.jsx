import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); 

export const registro = async (nombre, correo, contraseña) => {
  try {
    await pb.collection('users').create({
      email: correo,
      password: contraseña,
      passwordConfirm: contraseña,
      name: nombre,
    });
    alert('Registro exitoso');
  } catch (error) {
    console.error('Error en el registro:', error);
    alert('Error en el registro');
  }
};

export const login = async (correo, contraseña) => {
  try {
    await pb.collection('users').authWithPassword(correo, contraseña);
    alert('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    alert('Error en el inicio de sesión');
  }
};