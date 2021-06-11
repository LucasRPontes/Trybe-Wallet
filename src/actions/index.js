const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: {
    email,
  },
});

export default saveEmail;
